---
id: rest-reference
title: REST Reference
---

# REST Reference

:::note Placeholder
Full endpoint documentation is added as each resource is implemented. This page lists the planned endpoint set.
:::

## Devices

| Method | Path | Description |
|---|---|---|
| `GET` | `/v1/devices` | List devices |
| `POST` | `/v1/devices` | Register device |
| `GET` | `/v1/devices/:id` | Get device |
| `PATCH` | `/v1/devices/:id` | Update device |
| `DELETE` | `/v1/devices/:id` | Deregister device |
| `GET` | `/v1/devices/:id/status` | Connection status |

## Telemetry

| Method | Path | Description |
|---|---|---|
| `POST` | `/v1/telemetry` | Ingest batch |
| `GET` | `/v1/devices/:id/telemetry` | Query historical |
| `GET` | `/v1/devices/:id/telemetry/latest` | Latest values |

## Alarms

| Method | Path | Description |
|---|---|---|
| `GET` | `/v1/alarms` | List alarms |
| `GET` | `/v1/alarms/:id` | Alarm details |
| `POST` | `/v1/alarms/:id/acknowledge` | Acknowledge |
| `POST` | `/v1/alarms/:id/resolve` | Resolve |
| `GET` | `/v1/alarm-rules` | List rules |
| `POST` | `/v1/alarm-rules` | Create rule |
| `PATCH` | `/v1/alarm-rules/:id` | Update rule |
| `DELETE` | `/v1/alarm-rules/:id` | Delete rule |

## Organisations

| Method | Path | Description |
|---|---|---|
| `GET` | `/v1/organisations/:id` | Organisation details |
| `GET` | `/v1/organisations/:id/sites` | List sites |
| `POST` | `/v1/organisations/:id/sites` | Create site |
| `GET` | `/v1/organisations/:id/users` | List users |
| `POST` | `/v1/organisations/:id/users` | Invite user |
| `PATCH` | `/v1/organisations/:id/users/:uid` | Update role |
