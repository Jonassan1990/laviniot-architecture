---
id: ADR-0002-scalability
title: "ADR-0002: The platform shall scale from 10 devices to enterprise deployments without changing the core architecture"
---

# ADR-0002: The platform shall scale from 10 devices to enterprise deployments without changing the core architecture

| Field | Value |
|---|---|
| **Status** | ✅ Accepted |
| **Date** | 2025-01-01 |
| **Author** | Chief Software Architect |
| **Supersedes** | N/A |
| **Superseded by** | N/A |
| **Related** | [ADR-0001](/adr/ADR-0001-modularity) |

---

## Context

LavinIoT serves customers at different scales. An early customer may connect 10–50 devices at a single site. An enterprise customer may connect thousands of devices across dozens of sites and multiple regions. Both must be served by the same platform.

The risk without a scalability decision: the platform is designed for one scale, reaches the limit, and requires a fundamental redesign to serve the other. This is not a theoretical risk — it is the most common failure mode in IoT platform evolution.

The question: should the architecture be designed for small-scale simplicity (and redesigned later), or should it be designed from the start to support the full scale range without architectural change?

---

## Decision

**The platform shall scale from 10 devices to enterprise deployments without changing the core architecture.**

This does not mean the initial deployment runs at enterprise scale. It means the architecture does not have structural ceilings that require redesign to exceed.

Specifically:

1. **The data model is multi-tenant and hierarchical from day one.** Organisation → Site → Area → Device. Adding more tenants, sites, or devices does not require a schema change.

2. **The Core is stateless.** All state lives in provider-backed stores. A stateless Core can be run as multiple replicas without session synchronisation.

3. **All inter-module communication is asynchronous and brokered.** The message bus is the interface. Adding more producers or consumers does not require changes to existing modules.

4. **Telemetry ingestion and alarm evaluation are decoupled.** A spike in telemetry volume does not block alarm evaluation. A slow alarm evaluation does not back-pressure telemetry ingestion.

5. **The API layer is stateless.** Multiple API replicas can serve requests without coordination.

6. **Provider interfaces do not assume single-node deployment.** `ITelemetryStore` does not assume a single InfluxDB instance. `IMessageBus` does not assume an in-process queue. The provider implementations are responsible for clustering — the interface is cluster-agnostic.

7. **Each module declares its resource requirements at registration.** This enables the Core to schedule and scale modules independently on multi-node infrastructure.

---

## Why this constraint is required

### The cost of a later redesign is prohibitive

A platform that handles 50 devices well — with shared memory, single-process communication, and a monolithic database — will reach a structural ceiling. At 5 000 devices, a complete re-architecture is required. This is not a refactoring; it is a rebuild. It means downtime, data migration, and re-certification for industrial compliance.

Designing for scale from the start costs days of upfront design. Redesigning for scale at the ceiling costs months and carries significant operational risk.

### Customers grow

A customer who starts with a 20-device pilot will expand. If the platform cannot scale with them, they migrate to a competitor. The initial design determines whether the platform can retain growing customers.

### Enterprise and SME are not different products

With a scalable architecture, the same codebase serves both. Without one, they require separate products or a split codebase. This multiplies the engineering cost of every feature.

---

## What "no architectural change" means precisely

| Allowed at higher scale | Not required |
|---|---|
| Adding more replicas of an existing module | Rewriting Core business logic |
| Switching to a clustered provider (e.g. EMQX cluster instead of single Mosquitto) | Changing module interfaces |
| Adding a load balancer in front of the API | Changing the data model schema |
| Enabling horizontal sharding in the telemetry store | Splitting the Core into multiple services |
| Increasing message bus throughput capacity | Changing the provider interface contracts |

The architecture defines the shape of the system. Scaling changes the size of the pieces within that shape — not the shape itself.

---

## Scalability design patterns in use

### Stateless services

The Core, API layer, and all Modules are stateless. State (device registry, alarm state, telemetry) lives exclusively in provider-backed stores. Stateless services can be replicated without coordination.

### Asynchronous event bus

All inter-module communication is asynchronous. A module that is slow does not block a module that is fast. The message bus absorbs bursts and applies backpressure to producers when necessary.

### Horizontal telemetry sharding

The `ITelemetryStore` interface supports sharding by `device_id`. The concrete implementation (InfluxDB, TimescaleDB) may shard internally — the Core does not change.

### Organisation-level query scoping

All queries are scoped to `organisation_id`. This is both a multi-tenancy requirement (see data model) and a scalability pattern — queries never scan the full dataset.

### Declarative module resource requirements

```
IModule {
  resourceProfile: {
    cpu: "low | medium | high"
    memory: "low | medium | high"
    scaling: "single | horizontal"
  }
}
```

Modules that are CPU-bound and horizontally scalable (e.g. Telemetry Manager) declare this at registration. The deployment layer can then schedule them independently.

---

## Scaling envelope

The following is the intended scaling envelope of this architecture. These are design targets, not verified benchmarks.

| Scale | Devices | Telemetry rate | Deployment |
|---|---|---|---|
| Pilot | 10–100 | < 1 000 metrics/sec | Single VPS |
| Growth | 100–1 000 | 1 000–10 000 metrics/sec | 2–4 node cluster |
| Enterprise | 1 000–50 000 | 10 000–500 000 metrics/sec | Clustered provider infrastructure |

At each scale level, the Core architecture is unchanged. Only the provider implementations, replica counts, and infrastructure scale.

---

## Consequences

### Positive
- A pilot customer and an enterprise customer use the same platform codebase
- Scaling is an operations task, not an architecture task
- Customers can grow on the platform without migrating to a new product
- The initial single-node deployment is production-viable for pilot scale

### Negative
- The stateless requirement means sessions cannot be stored in memory — all session state must be stored in an external provider from day one (adds design complexity to the API layer)
- Asynchronous event bus requires explicit handling of ordering, deduplication, and at-least-once delivery guarantees from the start
- Module resource profiling adds a small amount of overhead at module registration

### Neutral
- The initial deployment runs on a single VPS — horizontal scaling infrastructure is not deployed until needed
- Performance benchmarks at enterprise scale cannot be verified until enterprise-scale infrastructure is available

---

## Alternatives considered

### Design for small scale now, redesign later

Build a simple, tightly coupled system optimised for the current pilot scale. Redesign when the ceiling is reached.

**Rejected because:** The cost of redesign exceeds the cost of upfront scalability design. More critically, redesigning a production system serving industrial customers creates unacceptable operational risk. The additional upfront complexity is bounded and manageable. The redesign risk is not.

### Microservices from day one

Build each module as an independent service from the start, enabling independent scaling immediately.

**Rejected because:** Microservices introduce distributed systems complexity (service discovery, distributed tracing, network partitions, independent deployment pipelines) at a stage where the team size and scale do not justify it. The modular architecture of ADR-0001 enables modules to be extracted into services later if needed — without making it a requirement now.

### Serverless / FaaS for telemetry ingestion

Use a serverless function model for telemetry ingestion to get automatic horizontal scaling.

**Rejected for now:** Serverless introduces cold-start latency, stateless-only constraints, and vendor coupling that is incompatible with the no-vendor-lock-in engineering principle. This may be revisited for specific providers (e.g. MQTT-triggered functions) in a future ADR.
