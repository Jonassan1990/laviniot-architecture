---
id: intro
title: Lavin Book — Handbook
sidebar_position: 1
---

<p class="section-meta">Internal Engineering Handbook</p>

# Lavin Book

> **The engineering handbook of LavinIoT.**

Lavin Book is the single source of truth for the company. It is not documentation only. It is the engineering handbook, the product handbook, the architecture handbook, the design handbook, and the decision log — in one place.

---

## What this is

Every significant decision at LavinIoT is recorded here. Every module has a spec here. Every architectural choice has a rationale here. Every sprint has a record here.

This book governs the platform. The platform does not govern this book.

---

## How to read this book

| If you are... | Start here |
|---|---|
| A new engineer | [Engineering Principles](/engineering-principles) → [00 Vision](/vision) → [02 Core Architecture](/core-architecture) |
| An architect | [08 ADR](/adr) → [02 Core Architecture](/core-architecture) → [03 Module Catalog](/module-catalog) |
| A product designer | [01 Product](/product) → [05 UX & Design System](/ux-design-system) |
| Reviewing a decision | [08 ADR](/adr) |
| Writing a new module | [02 Core Architecture](/core-architecture) → [03 Module Catalog](/module-catalog) → [06 APIs & SDKs](/apis-sdks) |
| Deploying the platform | [07 Deployment](/deployment) |

---

## The rules of Lavin Book

1. **Architecture before implementation.** No module is built without a documented interface and an accepted ADR.
2. **Documentation before code.** If you cannot explain what you are building in this book, you are not ready to build it.
3. **Decisions are recorded, not remembered.** If it is not in an ADR or the Sprint Journal, it did not happen.
4. **This book is maintained with the same discipline as production code.** Outdated documentation is a defect.
5. **No business logic lives here.** This book governs the platform. It does not implement it.
6. **ADRs are immutable after acceptance.** Reversals supersede — they do not delete.

---

## Section index

| Section | Purpose |
|---|---|
| [⚙️ Engineering Principles](/engineering-principles) | The non-negotiable engineering values |
| [00 Vision](/vision) | Platform direction and strategic constraints |
| [01 Product](/product) | Product philosophy, personas, roadmap |
| [02 Core Architecture](/core-architecture) | Topology, Core, Providers, Security, Invariants |
| [03 Module Catalog](/module-catalog) | Every discrete capability unit |
| [04 Data Model](/data-model) | Entities, schema, multi-tenancy, retention |
| [05 UX & Design System](/ux-design-system) | Design principles, tokens, components, screens |
| [06 APIs & SDKs](/apis-sdks) | REST, MQTT, authentication, SDK roadmap |
| [07 Deployment](/deployment) | Cloud, Edge, Hybrid, CI/CD, runbooks |
| [08 ADR](/adr) | Architecture Decision Records |
| [09 Sprint Journal](/sprint-journal) | Engineering records per sprint |
| [10 Release Notes](/release-notes) | What shipped, what changed |
