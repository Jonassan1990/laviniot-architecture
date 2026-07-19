---
id: hybrid
title: Hybrid
sidebar_position: 4
---

# Hybrid Deployment

:::note Placeholder
Hybrid deployment patterns and synchronisation protocols will be documented here.
:::

## Synchronisation model

In a hybrid deployment:

1. The edge module collects and processes data locally
2. Telemetry is buffered locally in a time-ordered queue
3. When cloud connectivity is available, buffered telemetry is uploaded in order
4. Cloud-side alarm rules evaluate the same data after upload
5. Local alarm rules provide immediate notification during outages

## Conflict resolution

If a local alarm is triggered and resolved before cloud sync, the audit trail reflects:
- When the alarm triggered (edge time)
- When the alarm was acknowledged (edge time)
- When the record was ingested by the cloud (cloud time)

No conflict resolution is needed — the cloud is the system of record for historical data, not for real-time state.
