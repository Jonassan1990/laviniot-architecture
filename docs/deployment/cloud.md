---
id: cloud
title: Cloud
sidebar_position: 2
---

# Cloud Deployment

:::note Placeholder
Cloud infrastructure specifications will be documented here as the production environment is finalised.
:::

## Components

| Component | Technology | Host |
|---|---|---|
| Frontend (website) | Next.js | Vercel |
| Frontend (dashboard) | Next.js | Vercel |
| API backend | Python / Flask | VPS |
| MQTT broker | TBD | VPS |
| Time-series store | TBD | VPS |
| Relational store | TBD | VPS or managed |

## Environment variables

All secrets are managed as environment variables. See deployment runbooks (TBD) for the full reference per service.

## Regions

The platform targets EU regions for all data storage to comply with GDPR requirements.
