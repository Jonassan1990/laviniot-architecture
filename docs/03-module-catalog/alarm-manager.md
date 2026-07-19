---
id: alarm-manager
title: Alarm Manager
---

# Alarm Manager

| Field | Value |
|---|---|
| **Module ID** | `alarm-manager` |
| **Status** | Planned |
| **Dependencies** | `ITelemetryStore`, `IAlarmStore`, `IMessageBus` |

## Purpose

Evaluates alarm rules against incoming telemetry. Manages the alarm lifecycle (triggered → acknowledged → resolved). Supports threshold, rate-of-change, and ML-score alarm types.

## Events consumed

| Event | Action |
|---|---|
| `telemetry.received` | Evaluate configured alarm rules |
| `inference.result` | Evaluate ML-score alarm rules |
| `device.disconnected` | Trigger connectivity alarm if configured |

## Events produced

| Event | Consumers |
|---|---|
| `alarm.triggered` | Notification Manager |
| `alarm.acknowledged` | Audit Log |
| `alarm.resolved` | Audit Log, Notification Manager |

## Alarm types

| Type | Description |
|---|---|
| `threshold` | Value exceeds static upper or lower bound |
| `rate_of_change` | Value changes faster than configured rate |
| `ml_score` | AI inference score exceeds configured threshold |
| `connectivity` | Device disconnected for longer than configured duration |

:::note Placeholder
Alarm rule schema and evaluation logic will be specified in detail when the module implementation sprint begins.
:::
