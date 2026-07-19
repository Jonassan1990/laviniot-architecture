# Lavin Book

> The engineering handbook of LavinIoT.

Lavin Book is the single source of truth for the company — engineering handbook, product handbook, architecture handbook, design handbook, and decision log in one place.

## Sections

| # | Section | Description |
|---|---|---|
| — | Engineering Principles | The 9 non-negotiable engineering values |
| 00 | Vision | Platform direction and strategic constraints |
| 01 | Product | Philosophy, personas, roadmap |
| 02 | Core Architecture | Topology, Core, Providers, Security, Invariants |
| 03 | Module Catalog | Every discrete capability unit |
| 04 | Data Model | Entities, schema, multi-tenancy, retention |
| 05 | UX & Design System | Design principles, tokens, components, screens |
| 06 | APIs & SDKs | REST, MQTT, auth, webhooks, SDK roadmap |
| 07 | Deployment | Cloud, Edge, Hybrid, CI/CD, runbooks |
| 08 | ADR | Architecture Decision Records |
| 09 | Sprint Journal | Engineering records per sprint |
| 10 | Release Notes | What shipped, what changed |

## Running locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Governance

1. Architecture before implementation
2. Interface before implementation
3. Documentation before code
4. ADRs are immutable after acceptance
5. This book is maintained with the same discipline as production code

---

*Lavin Book — internal engineering handbook. Not for external distribution.*
