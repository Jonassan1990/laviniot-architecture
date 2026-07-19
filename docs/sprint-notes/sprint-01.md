---
id: sprint-01
title: Sprint 01
sidebar_position: 2
---

# Sprint 01

| Field | Value |
|---|---|
| **Sprint** | 01 |
| **Focus** | Marketing website, QA audit, Architecture portal |
| **Outcome** | Website released to production; architecture portal created |

---

## What was planned

- Build and deploy the marketing website at `www.lavin-iot.com`
- Conduct a production QA audit against sprint reports
- Resolve all release blockers
- Create the `laviniot-architecture` documentation portal
- Establish the ADR framework

---

## What was delivered

- ✅ Marketing website live at `www.lavin-iot.com`
- ✅ Contact form using Next.js Server Actions + Nodemailer (Zoho SMTP)
- ✅ All fabricated marketing data removed (fake stats, testimonials, case study claims)
- ✅ QA audit completed; 7 critical release blockers identified and resolved
- ✅ `RELEASE-READY.md` signed off
- ✅ Architecture portal (this document) initialised with full structure
- ✅ ADR-0001 accepted

---

## What was deferred

- API backend implementation (Phase 1 — Foundation)
- Platform dashboard implementation (Phase 1 — Foundation)
- MQTT ingestion (Phase 1 — Foundation)

---

## Key decisions made

- **Contact form**: Rejected Formspree and mailto fallback. Implemented Next.js Server Action with Nodemailer for reliable email delivery.
- **Data honesty**: All fabricated metrics removed. Platform presented with honest capabilities only.
- **Architecture portal**: Created as a separate repository to enforce separation between governance documentation and application code.
- **ADR framework**: Adopted from the start. ADR-0001 (modularity) is the founding principle.

---

## What was learned

- The GitHub repository and the Vercel deployment can diverge significantly if deployments are not triggered by the same commit. Full sync of all files in a single commit resolved persistent build failures.
- Docusaurus 3.x has built-in Mermaid support via `@docusaurus/theme-mermaid` — no third-party remark plugin required.
