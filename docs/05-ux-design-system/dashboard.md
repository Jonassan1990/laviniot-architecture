---
id: dashboard
title: Dashboard Spec
---

# Dashboard Specification

:::note Placeholder
Detailed screen specifications and wireframe references will be added as the dashboard design matures.
:::

## Key screens

| Screen | Path | Primary Persona |
|---|---|---|
| Fleet Overview | `/` | Operator |
| Site View | `/sites/:id` | Operator, Engineer |
| Device View | `/devices/:id` | Engineer |
| Alarm Feed | `/alarms` | Operator |
| Reports | `/reports` | Technical Lead |
| Device Config | `/devices/:id/config` | Engineer |
| Settings | `/settings` | Technical Lead |

## Layout structure

```
┌──────────────────────────────────────────────────────┐
│  Nav Rail  │  Breadcrumb + Page Title                 │
│            │                                          │
│  Overview  │  ┌────────────┐  ┌────────────┐         │
│  Sites     │  │ Status     │  │ Status     │         │
│  Alarms    │  │ Card       │  │ Card       │         │
│  Reports   │  └────────────┘  └────────────┘         │
│  Settings  │                                          │
│            │  ┌──────────────────────────────┐        │
│            │  │  Time-series Chart            │        │
│            │  └──────────────────────────────┘        │
│            │                                          │
│            │  ┌──────────────────────────────┐        │
│            │  │  Alarm Feed                   │        │
│            │  └──────────────────────────────┘        │
└──────────────────────────────────────────────────────┘
```
