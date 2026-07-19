---
id: edge
title: Edge
---

# Edge Deployment

:::note Placeholder
Edge module deployment specifications will be documented in Phase 1.
:::

## Edge module responsibilities

- Connect to local assets via OPC-UA, Modbus, or MQTT
- Buffer telemetry locally during cloud outages
- Execute local alarm rules without cloud connectivity
- Run ONNX inference models for time-critical decisions
- Synchronise with the cloud Core when connectivity is restored

## Hardware targets

- Industrial PC (x86_64)
- Raspberry Pi 4 / CM4 (ARM64)
- Fanless embedded Linux devices (minimum: 2GB RAM, 16GB storage)

## Connectivity requirements

| Scenario | Connectivity |
|---|---|
| Recommended | Dedicated industrial LTE or fibre |
| Supported | 3G/4G with intermittent availability |
| Supported | Air-gap with manual synchronisation |
