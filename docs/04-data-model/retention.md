---
id: retention
title: Data Retention
---

# Data Retention

:::note Placeholder
Retention policies require an ADR before implementation. This document describes the design intent.
:::

## Retention tiers

| Tier | Resolution | Default Retention |
|---|---|---|
| Raw | 1s intervals | 30 days |
| Aggregated | 1-minute aggregates | 1 year |
| Historical | 1-hour aggregates | Indefinite |

## Per-tenant configuration

Retention periods will be configurable per organisation within platform-defined maximums. An organisation can request shorter retention for compliance reasons (e.g. GDPR right to erasure).

## Deletion

- Time-series telemetry: deleted by retention policy or explicit request
- Alarm records: retained for audit purposes; soft-deleted for GDPR
- Audit logs: retained for minimum 7 years; not deletable
- User data: deleted on GDPR request (PII fields zeroed, records retained for audit integrity)
