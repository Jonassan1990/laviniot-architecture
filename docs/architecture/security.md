---
id: security
title: Security
sidebar_position: 6
---

# Security

## Governing principle

Security is structural. Authentication, authorisation, tenant isolation, and audit logging are architectural components — not features added after the platform is built.

---

## Authentication

### API authentication

All API requests require a Bearer token. Token types:

| Type | Lifetime | Use case |
|---|---|---|
| User JWT | 1 hour (refresh: 30 days) | Dashboard and interactive clients |
| API Key | Indefinite (revocable) | Device integrations and server-to-server |
| Edge Token | Configurable | Edge module to Core communication |

### Token validation

- JWTs are validated using asymmetric keys (RS256)
- API Keys are stored as hashed values — the plaintext is shown once at creation
- All tokens are scoped to an organisation — cross-organisation use is not possible

---

## Authorisation

### Role model

| Role | Scope | Permissions |
|---|---|---|
| `org:admin` | Organisation | Full access to all resources within the organisation |
| `org:engineer` | Organisation | Read/write devices, alarms, telemetry. No user management |
| `org:viewer` | Organisation | Read-only access to all resources |
| `site:admin` | Site | Full access scoped to one site |
| `site:viewer` | Site | Read-only access scoped to one site |
| `api:device` | Device | Write telemetry for specific devices only |

### Authorisation enforcement

- The Core enforces authorisation on every write operation
- The API layer enforces authorisation on every read operation
- No authorisation bypass path exists in the codebase — violations are a critical defect

---

## Data isolation

- Every database record is scoped to an `organisation_id`
- Queries never join across organisation boundaries
- The query builder enforces organisation scoping — direct SQL execution is prohibited
- Tenant isolation is tested with explicit cross-tenant penetration test cases

---

## Transport security

| Connection | Requirement |
|---|---|
| All API traffic | TLS 1.2 minimum (TLS 1.3 preferred) |
| Edge to Core | Mutual TLS (mTLS) |
| MQTT (cloud) | TLS with client certificates |
| MQTT (edge) | TLS with local CA |
| Dashboard | HTTPS only (HSTS enabled) |

---

## Secrets management

- Secrets are never committed to version control
- Environment variables are used in all deployment contexts
- Secret rotation is supported without downtime for all critical secrets
- API Keys are hashed with bcrypt before storage

---

## Audit logging

Every write operation is recorded in the audit log:

| Field | Description |
|---|---|
| `id` | Unique event ID |
| `actor_id` | User or API key that performed the action |
| `organisation_id` | Tenant scope |
| `action` | Verb (e.g. `alarm.acknowledge`, `device.update`) |
| `resource_type` | Entity type |
| `resource_id` | Entity ID |
| `payload_hash` | SHA-256 of the request payload |
| `ip_address` | Source IP |
| `timestamp` | UTC ISO 8601 |

The audit log is append-only. No audit records are deleted or modified.

---

## Compliance targets

| Standard | Status |
|---|---|
| GDPR (EU) | Required — data residency and deletion rights |
| NIS2 (EU) | Required — critical infrastructure operators |
| IEC 62443 | Target for industrial deployments |

:::note Placeholder
Compliance verification procedures will be documented in a dedicated Compliance section once the platform reaches production readiness.
:::
