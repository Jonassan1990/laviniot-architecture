---
id: components
title: Components
---

# Components

:::note Placeholder
Component specifications will be added as the dashboard is designed and built.
:::

## Planned component catalogue

| Component | Purpose | Status |
|---|---|---|
| **Status Badge** | Displays ok / warning / critical / offline states | Planned |
| **Metric Card** | Shows a single metric value with trend indicator | Planned |
| **Alarm Feed** | Chronological list of active and recent alarms | Planned |
| **Time-series Chart** | Renders telemetry over time with alarm overlays | Planned |
| **Device List** | Tabular device registry with status and last-seen | Planned |
| **Site Map** | Hierarchical view of sites, areas, and devices | Planned |
| **Navigation Rail** | Left-side primary navigation | Planned |
| **Alarm Detail** | Full alarm record with evidence and acknowledgement | Planned |
| **Confirm Dialog** | Explicit confirmation for consequential actions | Planned |

## Component rules

1. Every component is documented before it is built
2. Status states (ok / warning / critical / offline) use both colour and icon — never colour alone
3. Destructive actions always route through Confirm Dialog
4. All interactive elements meet 44px minimum touch target
