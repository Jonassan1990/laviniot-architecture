---
id: alarms
title: Alarms
sidebar_position: 5
---

# Alarms API

:::note Placeholder
Full endpoint documentation will be added during API implementation sprints.
:::

## Key endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/v1/alarms` | List alarms |
| `GET` | `/v1/alarms/:id` | Get alarm details |
| `POST` | `/v1/alarms/:id/acknowledge` | Acknowledge an alarm |
| `POST` | `/v1/alarms/:id/resolve` | Resolve an alarm |
| `GET` | `/v1/alarm-rules` | List alarm rules |
| `POST` | `/v1/alarm-rules` | Create an alarm rule |
| `PATCH` | `/v1/alarm-rules/:id` | Update an alarm rule |
| `DELETE` | `/v1/alarm-rules/:id` | Delete an alarm rule |

## Alarm severity levels

| Level | Meaning |
|---|---|
| `critical` | Immediate operator action required |
| `warning` | Attention required, not immediately critical |
| `info` | Informational — no action required |
