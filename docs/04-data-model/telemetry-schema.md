---
id: telemetry-schema
title: Telemetry Schema
---

# Telemetry Schema

## Telemetry point fields

| Field | Type | Required | Description |
|---|---|---|---|
| `device_id` | UUID | ✅ | Foreign key to Device |
| `recorded_at` | ISO 8601 UTC | ✅ | Timestamp from the device clock |
| `ingested_at` | ISO 8601 UTC | ✅ | Timestamp when the platform received it |
| `metric_key` | string | ✅ | Metric identifier (e.g. `temperature`, `vibration_rms`) |
| `value` | float | ✅ | Numeric value |
| `unit` | string | ✅ | SI unit or enumerated unit string |
| `tags` | JSON object | ❌ | Arbitrary key-value metadata |

## Ingestion validation

The Telemetry Manager validates each point against the device's registered schema:

1. `device_id` must exist in the device registry
2. `recorded_at` must be within ±5 minutes of server time (configurable)
3. `metric_key` must be declared in the device schema
4. `value` must be within declared range if a range is specified
5. `unit` must match the declared unit for the metric

Points that fail validation are rejected and written to the rejection log with the failure reason.

## Device schema format

```json
{
  "metrics": {
    "temperature": {
      "unit": "°C",
      "min": -40,
      "max": 200,
      "type": "float"
    },
    "vibration_rms": {
      "unit": "m/s²",
      "min": 0,
      "type": "float"
    },
    "status": {
      "unit": "enum",
      "values": ["running", "idle", "fault"],
      "type": "string"
    }
  }
}
```
