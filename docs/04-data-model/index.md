---
id: index
title: "04 · Data Model"
sidebar_position: 1
---

<p class="section-meta">Section 04</p>

# Data Model

> The data model is the contract between every module. A module must never work around the data model — it must request a change through the ADR process.

---

## Purpose of this section

This section defines what data the platform stores, how it is structured, and what rules govern it. The data model is the most stable part of the system — changes to it affect every module, every API, and every provider.

---

## Design principles

1. **Multi-tenant from day one** — every record is scoped to an Organisation
2. **Immutable telemetry** — time-series data is never updated after write
3. **Explicit timestamps** — every record carries `recorded_at` (device time) and `ingested_at` (platform time)
4. **Schema-on-write** — device telemetry is validated at ingestion

---

## In this section

| Page | Description |
|---|---|
| [Entities](./entities) | Full ER diagram and entity descriptions |
| [Telemetry Schema](./telemetry-schema) | Telemetry point structure and validation rules |
| [Multi-Tenancy](./multi-tenancy) | How tenant isolation is enforced at the data level |
| [Data Retention](./retention) | Retention tiers and archival policy |
