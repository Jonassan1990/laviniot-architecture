---
id: edge
title: Edge
sidebar_position: 3
---

# Edge Deployment

:::note Placeholder
Edge module deployment specifications will be documented here.
:::

## Edge module responsibilities

- Connect to local assets via OPC-UA, Modbus, or MQTT
- Buffer telemetry locally during cloud outages
- Execute local alarm rules without cloud connectivity
- Run ONNX inference models for time-critical decisions
- Synchronise with the cloud Core when connectivity is restored

## Hardware targets

The edge module is designed to run on:

- Industrial PC (x86_64)
- Raspberry Pi 4 / CM4 (ARM64)
- Fanless embedded Linux devices

## Connectivity requirements

- Minimum: 3G/4G with intermittent availability
- Recommended: Dedicated industrial LTE or fibre
- Air-gap: Supported with manual synchronisation
