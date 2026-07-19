---
id: devices
title: Devices
sidebar_position: 3
---

# Devices API

:::note Placeholder
Full endpoint documentation will be added during API implementation sprints.
:::

## Key endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/v1/devices` | List devices in organisation |
| `POST` | `/v1/devices` | Register a new device |
| `GET` | `/v1/devices/:id` | Get device details |
| `PATCH` | `/v1/devices/:id` | Update device configuration |
| `DELETE` | `/v1/devices/:id` | Deregister a device |
| `GET` | `/v1/devices/:id/status` | Get current connection status |
