---
id: hybrid
title: Hybrid
---

# Hybrid Deployment

:::note Placeholder
Hybrid synchronisation protocols will be documented when the edge module is implemented.
:::

## Synchronisation model

1. Edge module collects and processes data locally
2. Telemetry is buffered in a local time-ordered queue
3. When connectivity is available, buffered telemetry uploads in chronological order
4. Cloud-side alarm rules evaluate the same data after upload
5. Local alarm rules provide immediate notification during outages

## Conflict resolution

The cloud is the system of record for historical data. Real-time state is maintained at the edge during outages. There is no merge conflict — the audit trail records edge timestamps and cloud ingestion timestamps separately.
