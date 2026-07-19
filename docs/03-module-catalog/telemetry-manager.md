---
id: telemetry-manager
title: Telemetry Manager
---

# Telemetry Manager

| Field | Value |
|---|---|
| **Module ID** | `telemetry-manager` |
| **Status** | Planned |
| **Dependencies** | `ITelemetryStore`, `IMessageBus` |

## Purpose

Receives normalised telemetry from the Integration Bus. Validates telemetry against the registered device schema. Writes valid telemetry to the telemetry store. Rejects and logs invalid telemetry.

## Events consumed

| Event | Action |
|---|---|
| `telemetry.raw` | Validate, enrich with device context, write to store, emit `telemetry.received` |

## Events produced

| Event | Consumers |
|---|---|
| `telemetry.received` | Alarm Manager, AI Engine |
| `telemetry.rejected` | Audit Log |

## Validation rules

- Required fields present (`device_id`, `recorded_at`, at least one metric)
- `device_id` exists in device registry
- `recorded_at` is within acceptable clock skew (configurable, default ±5 minutes)
- Metric keys match registered device schema

:::note Placeholder
Detailed validation rules and schema format will be specified in Section 04 Data Model.
:::
