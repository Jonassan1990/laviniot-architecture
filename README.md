# LavinIoT Architecture Portal

> Single source of truth for the LavinIoT platform — design, decisions, and governance.

This repository contains the Docusaurus documentation portal for the LavinIoT platform. It is **not source code**. It governs how the platform is designed, why decisions were made, and how every component relates to every other.

## Contents

| Section | Description |
|---|---|
| **Vision** | Long-term platform direction and constraints |
| **Product Philosophy** | Governing trade-off principles |
| **Architecture** | Core, Modules, Providers, Data Model, Security |
| **API** | REST and MQTT contracts |
| **UI / UX** | Design system and dashboard specifications |
| **Deployment** | Cloud, Edge, Hybrid topology and CI/CD |
| **Roadmap** | Phased delivery milestones |
| **ADR** | Architecture Decision Records |
| **Sprint Notes** | Engineering records per sprint |
| **Decision Log** | Informal but traceable decisions |

## Running locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Contributing

1. All significant architectural decisions require an ADR.
2. All informal decisions must be added to the Decision Log.
3. Documentation is maintained with the same discipline as production code.
4. Outdated documentation is treated as a defect.

## Governance rules

- No code is written before its architectural boundary is documented here.
- ADRs are immutable after acceptance. Reversals require a new ADR.
- The Decision Log is append-only.

---

*LavinIoT Architecture Portal — internal governance, not customer-facing.*
