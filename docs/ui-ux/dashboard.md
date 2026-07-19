---
id: dashboard
title: Dashboard
sidebar_position: 3
---

# Dashboard

:::note Placeholder
Screen-by-screen specifications and wireframe references will be added here as the dashboard design matures.
:::

## Key screens

| Screen | Path | Purpose |
|---|---|---|
| Overview | `/` | Fleet-level status at a glance |
| Site View | `/sites/:id` | All assets within one site |
| Device View | `/devices/:id` | Single device telemetry and alarms |
| Alarm Feed | `/alarms` | Active and historical alarms |
| Reports | `/reports` | Aggregated operational reports |
| Settings | `/settings` | Organisation and user configuration |

## Dashboard layout

```
┌─────────────────────────────────────────────────────┐
│  Nav Rail   │  Main Content Area                     │
│             │                                        │
│  Overview   │  ┌──────────┐  ┌──────────┐           │
│  Sites      │  │ Card     │  │ Card     │           │
│  Devices    │  └──────────┘  └──────────┘           │
│  Alarms     │                                        │
│  Reports    │  ┌──────────────────────────┐          │
│  Settings   │  │ Time-series chart        │          │
│             │  └──────────────────────────┘          │
└─────────────────────────────────────────────────────┘
```
