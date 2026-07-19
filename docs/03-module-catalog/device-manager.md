---
id: device-manager
title: Device Manager
---

# Device Manager

| Field | Value |
|---|---|
| **Module ID** | `device-manager` |
| **Status** | Planned |
| **Dependencies** | `IDeviceStore`, `IMessageBus` |

## Purpose

Maintains the device registry. Handles device provisioning, deprovisioning, and configuration updates. Tracks connection state and last-seen timestamps.

## Events consumed

| Event | Action |
|---|---|
| `device.connected` | Update connection status, record `last_seen_at` |
| `device.disconnected` | Update connection status |

## Events produced

| Event | Consumers |
|---|---|
| `device.provisioned` | Audit Log |
| `device.deprovisioned` | Alarm Manager (clear active alarms) |
| `device.configuration.updated` | Integration Bus (propagate config) |
