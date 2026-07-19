---
id: security
title: Security
---

# Security

Security is structural. Authentication, authorisation, tenant isolation, and audit logging are architectural components, not features added after the platform is built.

---

## Authentication

| Token type | Lifetime | Use case |
|---|---|---|
| User JWT (RS256) | 1 hour / 30-day refresh | Dashboard, interactive clients |
| API Key (hashed) | Indefinite (revocable) | Device integrations, server-to-server |
| Edge Token | Configurable | Edge module to Core communication |

---

## Authorisation (RBAC)

| Role | Scope | Permissions |
|---|---|---|
| `org:admin` | Organisation | Full access |
| `org:engineer` | Organisation | Read/write devices, alarms, telemetry |
| `org:viewer` | Organisation | Read-only |
| `site:admin` | Site | Full access within site |
| `site:viewer` | Site | Read-only within site |
| `api:device` | Device | Write telemetry for specific devices |

---

## Tenant isolation

- Every record is scoped to `organisation_id`
- Queries never cross organisation boundaries
- Isolation is enforced by the Core, not the API layer

---

## Audit log

Every write operation is recorded. Fields: `actor_id`, `organisation_id`, `action`, `resource_type`, `resource_id`, `payload_hash`, `ip_address`, `timestamp`. The audit log is append-only.

---

## Transport

| Connection | Requirement |
|---|---|
| All API traffic | TLS 1.2+ |
| Edge to Core | Mutual TLS (mTLS) |
| MQTT | TLS with client certificates |
| Dashboard | HTTPS, HSTS enabled |

---

## Compliance targets

GDPR (EU), NIS2 (EU), IEC 62443 (industrial target).
