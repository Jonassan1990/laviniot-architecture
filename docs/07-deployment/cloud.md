---
id: cloud
title: Cloud
---

# Cloud Deployment

:::note Placeholder
Cloud infrastructure specifications will be documented as the production environment is finalised.
:::

## Components

| Component | Technology | Host |
|---|---|---|
| Frontend (website) | Next.js | Vercel |
| Frontend (dashboard) | Next.js | Vercel |
| API backend | Python / Flask | VPS |
| MQTT broker | TBD | VPS |
| Time-series store | TBD | VPS or managed |
| Relational store | TBD | VPS or managed |

## EU region requirement

All customer data is stored in EU regions by default. This is a [Strategic Constraint](/vision/strategic-constraints) — it is not configurable per deployment without an explicit customer request and an ADR.
