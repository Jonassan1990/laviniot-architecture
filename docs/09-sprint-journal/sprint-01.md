---
id: sprint-01
title: Sprint 01
---

# Sprint 01

| Field | Value |
|---|---|
| **Sprint** | 01 |
| **Focus** | Marketing website, production QA, Lavin Book initialisation |
| **Outcome** | Website at `www.lavin-iot.com` released; Lavin Book created and structured |

---

## What was planned

- Build and deploy the marketing website
- Conduct production QA audit against sprint reports
- Resolve all release blockers
- Create the engineering handbook (Lavin Book)
- Establish the ADR framework with ADR-0001 and ADR-0002

---

## What was delivered

- ✅ Marketing website live at `www.lavin-iot.com`
- ✅ Contact form implemented via Next.js Server Action + Nodemailer (Zoho SMTP)
- ✅ All fabricated marketing data removed — fake stats, testimonials, case study claims
- ✅ QA audit completed — 7 critical release blockers identified and resolved
- ✅ `RELEASE-READY.md` signed off
- ✅ Lavin Book (this handbook) created with full 00–10 section structure
- ✅ ADR-0001 accepted: The platform shall be modular
- ✅ ADR-0002 accepted: The platform shall scale from 10 devices to enterprise without architectural change
- ✅ Engineering Principles documented

---

## What was deferred

- API backend implementation (Phase 1 — Foundation)
- Platform dashboard implementation (Phase 1 — Foundation)
- MQTT ingestion (Phase 1 — Foundation)
- Provider implementations (Phase 1 — Foundation)

---

## Key decisions made

| Decision | Record |
|---|---|
| Contact form: Next.js Server Action + Nodemailer | Decision Log DL-0002 |
| Remove all fabricated marketing data | Decision Log DL-0001 |
| Separate architecture repo from application code | Decision Log DL-0003 |
| Vercel for frontend hosting | Decision Log DL-0004 |
| Platform shall be modular | ADR-0001 |
| Platform shall scale without core changes | ADR-0002 |

---

## What was learned

- GitHub repository and Vercel deployment can diverge significantly when commits are made via the API. A full-file-tree push via the GitHub Trees API in a single commit is the reliable synchronisation method.
- Docusaurus 3.x has built-in Mermaid support via `@docusaurus/theme-mermaid` — no third-party remark plugin is required.
- Fabricated marketing metrics are discovered by industrial customers during due diligence. Honest qualitative capability descriptions are more credible than invented percentages.
