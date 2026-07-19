---
id: telemetry
title: Telemetry
sidebar_position: 4
---

# Telemetry API

:::note Placeholder
Full endpoint documentation will be added during API implementation sprints.
:::

## Key endpoints

| Method | Path | Description |
|---|---|---|
| `POST` | `/v1/telemetry` | Ingest a telemetry batch |
| `GET` | `/v1/devices/:id/telemetry` | Query historical telemetry |
| `GET` | `/v1/devices/:id/telemetry/latest` | Get latest values |

## MQTT ingestion

Devices may publish telemetry directly via MQTT:

```
Topic: devices/{device_id}/telemetry
QoS: 1

Payload:
{
  "recorded_at": "2025-01-01T10:00:00Z",
  "metrics": {
    "temperature": { "value": 72.4, "unit": "°C" },
    "vibration_rms": { "value": 0.42, "unit": "m/s²" }
  }
}
```
