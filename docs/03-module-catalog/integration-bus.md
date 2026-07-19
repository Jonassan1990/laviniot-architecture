---
id: integration-bus
title: Integration Bus
---

# Integration Bus

| Field | Value |
|---|---|
| **Module ID** | `integration-bus` |
| **Status** | Planned |
| **Dependencies** | `IMessageBus` |

## Purpose

The normalisation layer between Protocol Providers and the Core. Receives raw telemetry from any protocol provider, maps it to the canonical telemetry schema, and emits `telemetry.raw` events for the Telemetry Manager.

## Protocol provider interface

```
IProtocolProvider {
  connect(): void
  disconnect(): void
  onTelemetry(handler: (raw: RawTelemetry) => void): void
}
```

## Events produced

| Event | Consumers |
|---|---|
| `telemetry.raw` | Telemetry Manager |
| `device.connected` | Device Manager |
| `device.disconnected` | Device Manager, Alarm Manager |

## Canonical telemetry schema

```json
{
  "device_id": "uuid",
  "recorded_at": "ISO 8601",
  "source_protocol": "opc-ua | modbus | mqtt | rest",
  "metrics": {
    "metric_key": { "value": 0.0, "unit": "string" }
  },
  "tags": {}
}
```
