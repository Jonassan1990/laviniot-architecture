---
id: mqtt-reference
title: MQTT Reference
---

# MQTT Reference

## Topic schema

All MQTT topics follow the pattern: `laviniot/{organisation_id}/{site_id}/{device_id}/{event_type}`

## Device → Platform

### Telemetry ingestion

```
Topic:   devices/{device_id}/telemetry
QoS:     1
Retain:  false

Payload:
{
  "recorded_at": "2025-01-01T10:00:00Z",
  "metrics": {
    "temperature": { "value": 72.4, "unit": "°C" },
    "vibration_rms": { "value": 0.42, "unit": "m/s²" }
  }
}
```

### Device status

```
Topic:   devices/{device_id}/status
QoS:     1
Retain:  true

Payload:
{
  "status": "online | offline",
  "timestamp": "2025-01-01T10:00:00Z"
}
```

## Platform → Device

### Configuration update

```
Topic:   devices/{device_id}/config
QoS:     1

Payload:
{
  "schema_version": "2",
  "sampling_interval_ms": 1000
}
```

## Authentication

MQTT clients authenticate with client certificates or username/password backed by API Key. Plaintext MQTT is not permitted in production.
