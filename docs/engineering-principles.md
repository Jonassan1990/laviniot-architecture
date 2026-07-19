---
id: engineering-principles
title: Engineering Principles
sidebar_position: 2
---

# Engineering Principles

> These principles are not aspirational. They are the non-negotiable engineering values of LavinIoT. Every design decision, architecture choice, and technical trade-off is evaluated against them.

When a proposed implementation conflicts with a principle, the principle wins. Exceptions require an ADR.

---

## 01 · Modular First

The platform is a collection of independently replaceable components, not a monolith. Every capability is a discrete module with defined boundaries, documented interfaces, and no direct dependency on sibling modules.

**Why:** Industrial platforms have long operational lifetimes. Technology changes. Requirements change. A modular platform adapts. A monolith is rewritten.

**In practice:** Before building a capability, define its module boundary and interface. If you cannot define the interface, you do not understand the capability well enough to build it yet.

→ See [ADR-0001](/adr/ADR-0001-modularity)

---

## 02 · Interface Before Implementation

No module, provider, or API endpoint is implemented before its interface is defined and reviewed. The interface is the contract. The implementation is a consequence of the contract.

**Why:** Implementation decisions made without an interface become the de facto interface. Changing them later breaks everything that depends on them.

**In practice:** Write the interface in [02 Core Architecture](/core-architecture) or [03 Module Catalog](/module-catalog). Get it reviewed. Then implement.

---

## 03 · Documentation Before Code

If you cannot explain what you are building in Lavin Book, you are not ready to build it. Documentation is not written after the code is done — it is written before the code starts.

**Why:** Writing the documentation exposes gaps in understanding. Undocumented decisions become invisible constraints that future engineers cannot reason about or change safely.

**In practice:** Add a module definition, data model change, or API endpoint to Lavin Book before the first line of implementation code is written. Update Lavin Book in the same pull request as the code.

---

## 04 · Replaceable Providers

Every external dependency — a database, a message broker, an AI service, a notification channel — is accessed through a Core interface implemented by a Provider. No concrete implementation is ever directly imported by the Core or a Module.

**Why:** External technology changes. Vendor relationships change. Compliance requirements change. If an external system is hardcoded into the platform, replacing it requires rewriting the platform.

**In practice:** If you are writing `import InfluxDB` in a Core or Module file, stop. Create an `ITelemetryStore` interface. Write an `InfluxDBTelemetryStoreProvider`. Import the interface.

→ See [02 Core Architecture — Providers](/core-architecture/providers)

---

## 05 · Stateless Services Where Possible

Platform services (Core, API, Modules) do not hold state in memory between requests. All persistent state lives in provider-backed stores. In-memory caching is permitted only with explicit expiry and cache-miss handling.

**Why:** Stateless services can be replicated, restarted, and scaled without data loss or session inconsistency. Stateful services create invisible couplings that break at scale.

**In practice:** If a service needs to remember something between requests, ask: does this belong in the telemetry store, the alarm store, the device store, or the message bus? Use the appropriate provider.

→ See [ADR-0002](/adr/ADR-0002-scalability)

---

## 06 · Horizontal Scalability

The architecture is designed to scale horizontally — adding replicas — not vertically — adding resources to a single node. No component should be a scaling bottleneck that requires vertical scaling only.

**Why:** Vertical scaling has physical and economic limits. Horizontal scaling does not. Industrial deployments grow over their operational lifetime. The architecture must grow with them without redesign.

**In practice:** Design every service to run as N replicas without coordination. If two replicas would produce a conflict (e.g. duplicate alarm events), solve it in the message bus or store — not by preventing multiple replicas.

→ See [ADR-0002](/adr/ADR-0002-scalability)

---

## 07 · No Vendor Lock-in

The platform uses open standards for all external interfaces: MQTT, REST, OPC-UA, JSON Schema, HTTPS. Proprietary vendor APIs are used only inside Provider implementations — never in Core or Module code.

**Why:** Vendor relationships end. Vendor pricing changes. Vendor APIs break. A platform that depends on proprietary APIs is a platform at risk.

**In practice:** If a proprietary API call appears in Core or Module code, it must be moved into a Provider. If the only way to implement a capability requires proprietary coupling, write an ADR before proceeding.

---

## 08 · Industrial-First Design

The platform is designed for industrial environments, not office environments. Industrial means: continuous operation, high-stakes consequences, operators with domain expertise but not analytics training, intermittent connectivity, legacy infrastructure, and regulatory compliance requirements.

**Why:** Every design decision that assumes stable connectivity, trained users, or modern infrastructure makes the platform less useful to its actual users.

**In practice:** Before shipping any feature, ask: Does this work in a factory with intermittent 4G connectivity? Does this make sense to an operator who has never used a dashboard before? Does this survive a 30-day continuous operation test?

---

## 09 · Evidence Over Assumptions

Every significant technical assumption is validated before it becomes a commitment. Architecture decisions record the evidence that supports them. Data model decisions consider real customer data volumes. Scalability decisions consider real industrial telemetry rates.

**Why:** Industrial systems that fail based on untested assumptions fail in environments where the cost of failure is high. A database that "should be fine" at 10 000 metrics per second, without being tested at that rate, is an assumption — not an architecture.

**In practice:** When an ADR makes a claim (e.g. "InfluxDB is sufficient for enterprise scale"), identify what evidence would validate or invalidate that claim. Record the validation plan in the ADR. Update the ADR when evidence is collected.

---

## Applying the principles

When principles conflict — and they will — resolve the conflict explicitly:

1. Identify which principles are in tension
2. Determine which principle takes precedence in this specific context
3. Record the trade-off in the Decision Log or an ADR
4. Do not silently violate a principle without a recorded rationale

The order above reflects general priority, but context always applies. An emergency reliability fix may temporarily compromise documentation-first. Record why, and clean up the documentation immediately after.
