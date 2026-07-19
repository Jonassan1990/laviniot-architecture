---
id: providers
title: Providers
---

# Providers

## Definition

A Provider is a concrete implementation of a Core interface. Providers handle the external world: databases, message brokers, AI services, protocol adapters, notification channels. Providers are replaceable by configuration.

## Provider contract rules

1. A Provider implements exactly one Core interface
2. A Provider is stateless between calls
3. A Provider handles its own connection lifecycle (connect, retry, disconnect)
4. A Provider propagates errors as typed exceptions — it never silently swallows failures
5. A Provider is independently testable with a mock of the external system

## Provider catalogue

### Telemetry Store

| Provider | Status |
|---|---|
| InfluxDB Provider | Planned — first implementation target |
| TimescaleDB Provider | Backlog |
| In-Memory Provider | Planned — testing only |

### Protocol (Asset integration)

| Provider | Protocol | Status |
|---|---|---|
| OPC-UA Provider | OPC-UA | Planned |
| Modbus Provider | Modbus TCP/RTU | Planned |
| MQTT Provider | MQTT 3.1.1 / 5.0 | Planned |
| REST Provider | HTTP/REST | Planned |

### AI

| Provider | Status |
|---|---|
| Local ONNX Provider | Planned — edge inference |
| Azure ML Provider | Backlog |

### Notification

| Provider | Channel | Status |
|---|---|---|
| SMTP Provider | Email | Planned |
| Webhook Provider | HTTP POST | Planned |
| SMS Provider | SMS | Backlog |

### Message Bus

| Provider | Status |
|---|---|
| MQTT Bus Provider | Planned — production |
| In-Process Bus | Planned — testing |

---

## Adding a new provider

1. Implement the target Core interface
2. Write an integration test against the real external system
3. Register the provider with a string identifier
4. Document it in this page
5. Create an ADR if the provider introduces a new external dependency class
