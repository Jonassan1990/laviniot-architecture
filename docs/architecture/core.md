---
id: core
title: Core
sidebar_position: 2
---

# Core

## Definition

The Core is the central authority of the LavinIoT platform. It owns the canonical data model, enforces all business rules, and coordinates all platform modules. It does not contain integration logic, protocol adapters, or presentation concerns.

**The Core knows only interfaces.** It depends on no specific provider implementation. A database, a message queue, a protocol adapter, or a storage provider can be replaced without modifying Core logic.

---

## Responsibilities

| Responsibility | Description |
|---|---|
| **Device Registry** | Maintains the authoritative record of all connected devices, their configuration, and their status |
| **Telemetry ingestion** | Accepts normalised telemetry events from the Integration Bus and routes them to storage |
| **Alarm evaluation** | Evaluates alarm rules against incoming telemetry and emits alarm events |
| **Organisation management** | Manages the hierarchy of tenants, organisations, sites, and users |
| **AI orchestration** | Invokes AI/ML inference through a defined AI Provider interface |
| **Event bus** | Provides a typed event bus through which modules communicate without direct coupling |
| **Audit log** | Records all write operations with actor, timestamp, and payload |

---

## Core interfaces

The Core defines the following provider interfaces. Each interface has exactly one active implementation at runtime, selected by configuration.

```mermaid
classDiagram
    class ITelemetryStore {
        +write(deviceId, timestamp, metrics)
        +query(deviceId, from, to, resolution)
        +latest(deviceId)
    }

    class IAlarmStore {
        +create(alarm)
        +acknowledge(alarmId, userId)
        +resolve(alarmId, userId)
        +list(filter)
    }

    class IDeviceStore {
        +register(device)
        +update(deviceId, patch)
        +get(deviceId)
        +list(organisationId)
    }

    class IMessageBus {
        +publish(topic, payload)
        +subscribe(topic, handler)
    }

    class IAIProvider {
        +infer(modelId, input)
        +listModels()
    }

    class INotificationProvider {
        +send(channel, recipient, payload)
    }

    Core --> ITelemetryStore
    Core --> IAlarmStore
    Core --> IDeviceStore
    Core --> IMessageBus
    Core --> IAIProvider
    Core --> INotificationProvider
```

---

## What the Core does NOT do

| Excluded concern | Where it belongs |
|---|---|
| Protocol parsing (OPC-UA, Modbus) | Protocol Providers |
| HTTP request handling | API layer |
| Rendering / UI state | Presentation layer |
| Time-series database internals | Telemetry Store Provider |
| AI model training | External ML pipeline |
| Email / SMS sending internals | Notification Provider |

---

## Core event bus

All inter-module communication goes through the event bus. Events are typed, versioned, and documented here as they are introduced.

| Event | Producer | Consumers |
|---|---|---|
| `telemetry.received` | Integration Bus | Alarm Manager, AI Engine |
| `alarm.triggered` | Alarm Manager | Notification Provider |
| `alarm.acknowledged` | API layer | Audit Log |
| `device.connected` | Protocol Gateway | Device Manager |
| `device.disconnected` | Protocol Gateway | Alarm Manager, Device Manager |

---

## Lifecycle

```mermaid
stateDiagram-v2
    [*] --> Initialising
    Initialising --> Ready: providers loaded + interfaces bound
    Ready --> Degraded: provider failure (non-critical)
    Ready --> Faulted: provider failure (critical)
    Degraded --> Ready: provider recovered
    Faulted --> [*]: shutdown required
```

The Core enters **Degraded** state if a non-critical provider (e.g. AI, Notifications) is unavailable. It enters **Faulted** state if a critical provider (telemetry store, message bus) is unavailable.
