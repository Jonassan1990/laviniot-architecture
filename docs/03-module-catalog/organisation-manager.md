---
id: organisation-manager
title: Organisation Manager
---

# Organisation Manager

| Field | Value |
|---|---|
| **Module ID** | `organisation-manager` |
| **Status** | Planned |
| **Dependencies** | `IDeviceStore`, `IMessageBus` |

## Purpose

Manages the tenant hierarchy: Organisation → Site → Area → Device. Enforces data isolation boundaries. Manages user accounts and role assignments within the organisation scope.

## Hierarchy

```mermaid
graph TD
    Org[Organisation] --> Site1[Site A]
    Org --> Site2[Site B]
    Site1 --> Area1[Area 1]
    Site1 --> Area2[Area 2]
    Area1 --> Dev1[Device]
    Area1 --> Dev2[Device]
```

## Events produced

| Event | Consumers |
|---|---|
| `organisation.created` | Audit Log |
| `user.invited` | Notification Manager |
| `user.role.updated` | Audit Log |
