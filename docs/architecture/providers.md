---
id: providers
title: Providers
sidebar_position: 4
---

# Providers

## Definition

A Provider is a concrete implementation of a Core interface. Providers handle the external world: databases, message brokers, AI services, protocol adapters, and notification channels.

**Providers are replaceable.** Switching from one time-series database to another, or from one AI service to another, must not require any change to Core or Module code — only a provider swap and configuration change.

---

## Provider contract rules

1. A Provider must implement exactly one Core interface
2. A Provider must be stateless between calls (state lives in the external system)
3. A Provider must handle its own connection lifecycle (connect, retry, disconnect)
4. A Provider must propagate errors as typed exceptions — never silently swallow failures
5. A Provider must be independently testable with a mock of the external system

---

## Provider catalogue

### Telemetry Store Providers

| Provider | Interface | Status | Notes |
|---|---|---|---|
| InfluxDB Provider | `ITelemetryStore` | Planned | First implementation target |
| TimescaleDB Provider | `ITelemetryStore` | Backlog | PostgreSQL-based alternative |
| In-Memory Provider | `ITelemetryStore` | Planned | Testing only |

---

### Protocol Providers

Protocol Providers translate raw industrial protocols into the canonical telemetry schema expected by the Integration Bus.

| Provider | Protocol | Status | Notes |
|---|---|---|---|
| OPC-UA Provider | OPC-UA | Planned | Primary industrial protocol |
| Modbus Provider | Modbus TCP/RTU | Planned | Legacy PLCs and meters |
| MQTT Provider | MQTT 3.1.1 / 5.0 | Planned | Native IoT devices |
| REST Provider | HTTP/REST | Planned | Modern sensors with REST APIs |

---

### AI Providers

| Provider | Interface | Status | Notes |
|---|---|---|---|
| Local ONNX Provider | `IAIProvider` | Planned | Edge-compatible inference |
| Azure ML Provider | `IAIProvider` | Backlog | Cloud-side inference |
| Internal Model Provider | `IAIProvider` | Backlog | First-party trained models |

---

### Notification Providers

| Provider | Interface | Channel | Status |
|---|---|---|---|
| SMTP Provider | `INotificationProvider` | Email | Planned |
| Webhook Provider | `INotificationProvider` | HTTP | Planned |
| SMS Provider | `INotificationProvider` | SMS | Backlog |
| Push Provider | `INotificationProvider` | Mobile push | Backlog |

---

### Message Bus Providers

| Provider | Interface | Status | Notes |
|---|---|---|---|
| MQTT Bus Provider | `IMessageBus` | Planned | Production |
| In-Process Bus Provider | `IMessageBus` | Planned | Testing and single-node |

---

## Provider configuration

Providers are selected and configured via environment variables or a platform configuration file. The Core reads provider selection at startup and never hard-codes a provider class.

```yaml
# Example: provider configuration (schema TBD via ADR)
providers:
  telemetry_store: influxdb
  message_bus: mqtt
  ai: local_onnx
  notification: smtp

influxdb:
  url: ${INFLUXDB_URL}
  token: ${INFLUXDB_TOKEN}
  org: ${INFLUXDB_ORG}
  bucket: ${INFLUXDB_BUCKET}
```

---

## Adding a new provider

1. Create a new class implementing the target Core interface
2. Write a provider-level integration test against the real external system
3. Register the provider in the provider registry with a string identifier
4. Document the provider in this page
5. Update the configuration schema
6. Create an ADR if the new provider introduces a new external dependency class
