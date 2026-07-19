---
id: data-model
title: Data Model
sidebar_position: 5
---

# Data Model

## Design principles

1. **Multi-tenant from day one.** Every record is scoped to an Organisation. There is no shared data space.
2. **Immutable telemetry.** Time-series data is never updated after write. Corrections are new writes with metadata.
3. **Explicit timestamps.** Every record carries both `recorded_at` (device time) and `ingested_at` (platform time).
4. **Schema-on-write.** Device telemetry is validated against a device-level schema at ingestion time.

---

## Entity hierarchy

```mermaid
erDiagram
    Organisation ||--o{ Site : contains
    Site ||--o{ Area : contains
    Area ||--o{ Device : contains
    Device ||--o{ TelemetryPoint : produces
    Device ||--o{ Alarm : has
    Organisation ||--o{ User : has
    User ||--o{ Role : assigned

    Organisation {
        uuid id
        string name
        string slug
        string region
        datetime created_at
    }

    Site {
        uuid id
        uuid organisation_id
        string name
        string timezone
        float latitude
        float longitude
    }

    Area {
        uuid id
        uuid site_id
        string name
    }

    Device {
        uuid id
        uuid area_id
        string name
        string protocol
        json schema
        string status
        datetime last_seen_at
    }

    TelemetryPoint {
        uuid device_id
        datetime recorded_at
        datetime ingested_at
        string metric_key
        float value
        string unit
        json tags
    }

    Alarm {
        uuid id
        uuid device_id
        string rule_id
        string severity
        string status
        datetime triggered_at
        datetime acknowledged_at
        uuid acknowledged_by
        datetime resolved_at
    }

    User {
        uuid id
        uuid organisation_id
        string email
        string name
        datetime created_at
    }

    Role {
        uuid id
        uuid user_id
        string scope
        string level
    }
```

---

## Telemetry schema

Individual telemetry points are stored in a time-series store. Each point carries:

| Field | Type | Description |
|---|---|---|
| `device_id` | UUID | Foreign key to Device |
| `recorded_at` | ISO 8601 | Timestamp from the device |
| `ingested_at` | ISO 8601 | Timestamp when the platform received it |
| `metric_key` | string | The metric identifier (e.g. `temperature`, `vibration_rms`) |
| `value` | float | Numeric value |
| `unit` | string | SI unit or enumerated unit string |
| `tags` | JSON | Arbitrary key-value metadata (e.g. sensor location, quality flag) |

---

## Alarm states

```mermaid
stateDiagram-v2
    [*] --> Triggered: rule condition met
    Triggered --> Acknowledged: operator acknowledges
    Acknowledged --> Resolved: condition cleared
    Triggered --> Resolved: auto-clear if rule allows
    Resolved --> [*]
```

---

## Multi-tenancy enforcement

- All queries are scoped by `organisation_id` at the Core level
- No query path exists that returns cross-tenant data
- Tenant isolation is enforced by the Core, not by the API layer
- The API layer may further scope by `site_id` or `area_id` based on user role

---

## Data retention (TBD)

Retention policies will be defined per-organisation and per-metric tier. An ADR is required before implementing retention logic. Default retention targets:

| Tier | Resolution | Retention |
|---|---|---|
| Raw | 1s | 30 days |
| Aggregated | 1min | 1 year |
| Historical | 1hr | Indefinite |
