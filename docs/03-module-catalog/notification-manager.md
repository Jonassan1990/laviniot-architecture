---
id: notification-manager
title: Notification Manager
---

# Notification Manager

| Field | Value |
|---|---|
| **Module ID** | `notification-manager` |
| **Status** | Planned |
| **Dependencies** | `INotificationProvider`, `IMessageBus` |

## Purpose

Subscribes to alarm events and routes notifications to configured channels via the `INotificationProvider` interface. Supports multiple channels per alarm rule. Handles deduplication and escalation.

## Events consumed

| Event | Action |
|---|---|
| `alarm.triggered` | Send notifications to configured recipients |
| `alarm.resolved` | Send resolution notification if configured |

## Events produced

| Event | Consumers |
|---|---|
| `notification.sent` | Audit Log |
| `notification.failed` | Audit Log |

## Notification channels (via providers)

| Channel | Provider | Status |
|---|---|---|
| Email | SMTP Provider | Planned |
| Webhook | Webhook Provider | Planned |
| SMS | SMS Provider | Backlog |
| Push | Push Provider | Backlog |
