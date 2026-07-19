---
id: roadmap
title: Roadmap
sidebar_position: 10
---

# Roadmap

:::note Living document
This roadmap reflects the current understanding of what needs to be built and in what order. It is updated as decisions are made. It is not a commitment to specific delivery dates.
:::

---

## Phase 1 — Foundation

**Goal:** A deployable platform that can receive telemetry from real devices and surface it in a dashboard.

| Milestone | Status |
|---|---|
| Marketing website live | ✅ Complete |
| Core architecture documented | ✅ Complete |
| ADR framework established | ✅ Complete |
| API contract defined (v1) | 🟡 In Progress |
| API backend scaffold | 🟡 In Progress |
| Platform dashboard scaffold | 🟡 In Progress |
| MQTT ingestion | ⬜ Planned |
| OPC-UA provider | ⬜ Planned |
| Device registry | ⬜ Planned |
| Telemetry storage (InfluxDB) | ⬜ Planned |
| Basic alarm rules | ⬜ Planned |
| Email notifications | ⬜ Planned |

---

## Phase 2 — Intelligence

**Goal:** AI-assisted anomaly detection and predictive maintenance signals.

| Milestone | Status |
|---|---|
| AI provider interface | ⬜ Planned |
| ONNX edge inference | ⬜ Planned |
| Anomaly detection model (first) | ⬜ Planned |
| Predictive alarm type | ⬜ Planned |
| Alarm evidence display in UI | ⬜ Planned |

---

## Phase 3 — Scale

**Goal:** Multi-site, multi-tenant production deployments.

| Milestone | Status |
|---|---|
| Multi-site organisation hierarchy | ⬜ Backlog |
| Role-based access control (full) | ⬜ Backlog |
| Data retention and archival | ⬜ Backlog |
| Compliance audit export | ⬜ Backlog |
| SLA monitoring | ⬜ Backlog |

---

## Out of scope (current horizon)

- Consumer IoT
- SCADA replacement
- On-premise SaaS licensing model
- White-label platform
