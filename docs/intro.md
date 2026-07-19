---
id: intro
slug: /
title: Architecture Portal
sidebar_position: 1
---

# LavinIoT Architecture Portal

> **This portal is the single source of truth for the LavinIoT platform.**
> It is not customer-facing documentation. It governs how the platform is designed, why decisions were made, and how every component relates to every other.

---

## Purpose

The architecture portal exists because **decisions decay without records, and systems decay without decisions**.

As LavinIoT grows, engineers join the team, systems evolve, and requirements change. Without a living architectural record, institutional knowledge exits with individuals, decisions are relitigated, and the platform drifts from its design intent.

This portal prevents that drift.

---

## Who this is for

| Role | How they use this portal |
|---|---|
| **Architects** | Author ADRs, define module boundaries, review API contracts |
| **Senior Engineers** | Understand system context before implementing; contribute to Decision Log |
| **Engineers** | Read Architecture, API, and Deployment sections before writing code |
| **Technical Leads** | Review Sprint Notes, maintain Roadmap alignment |
| **New team members** | Start with Vision → Product Philosophy → Architecture Overview |

---

## How to navigate

```
Vision → Product Philosophy
    ↓
Architecture Overview → Core → Modules → Providers → Data Model → Security
    ↓
API → UI/UX → Deployment
    ↓
ADR → Decision Log → Roadmap
```

For a new team member: read in this order.

For a specific decision: go directly to **ADR**.

For integration work: go directly to **API**.

For infrastructure: go directly to **Deployment**.

---

## Governance rules

1. **No code is written before its architectural boundary is documented.**
2. **Significant design decisions require an ADR.** A decision is significant if it affects module boundaries, technology choices, data contracts, or security posture.
3. **This portal is maintained with the same discipline as production code.** Outdated documentation is treated as a defect.
4. **The Decision Log captures informal choices.** Not every decision needs an ADR, but every decision must be traceable.

---

## Current status

| Section | Status |
|---|---|
| Vision | ✅ Draft |
| Product Philosophy | ✅ Draft |
| Architecture | ✅ Draft |
| API | 🟡 Stub |
| UI / UX | 🟡 Stub |
| Deployment | 🟡 Stub |
| ADR | ✅ ADR-0001 Accepted |
| Roadmap | 🟡 Draft |
| Sprint Notes | 🟡 Sprint 01 |
| Decision Log | 🟡 Stub |
