---
id: decision-log
title: Decision Log
sidebar_position: 16
---

# Decision Log

The Decision Log captures significant design and product decisions that do not require a full ADR but must be traceable. Each entry is immutable. If a decision is reversed, a new entry is added that references the original.

---

## Format

| Field | Description |
|---|---|
| **DL-XXXX** | Sequential identifier |
| **Date** | When the decision was made |
| **Area** | Domain of the decision |
| **Decision** | What was decided |
| **Rationale** | Why |
| **Owner** | Who made or approved the decision |

---

## Log

### DL-0001

| Field | Value |
|---|---|
| **Date** | 2025-01-01 |
| **Area** | Website |
| **Decision** | Remove all fabricated metrics, testimonials, and case study claims from the marketing website |
| **Rationale** | Industrial customers conduct technical due diligence. Fabricated numbers are discovered and destroy credibility. Honest qualitative descriptions of capabilities are more credible than invented percentages. |
| **Owner** | Architecture team |

---

### DL-0002

| Field | Value |
|---|---|
| **Date** | 2025-01-01 |
| **Area** | Website — Contact form |
| **Decision** | Implement contact form using Next.js Server Action + Nodemailer (Zoho SMTP). Reject Formspree and mailto fallback. |
| **Rationale** | The mailto fallback opens the OS mail client — unacceptable UX. Formspree introduces a third-party dependency for a first-party capability. Server Actions with Nodemailer give full control without additional service dependencies. |
| **Owner** | Architecture team |

---

### DL-0003

| Field | Value |
|---|---|
| **Date** | 2025-01-01 |
| **Area** | Architecture governance |
| **Decision** | Create a dedicated `laviniot-architecture` repository for all platform documentation, separate from application code |
| **Rationale** | Architecture documentation committed alongside application code becomes outdated as the code evolves and is often ignored. A dedicated repository with its own review process signals that documentation is a first-class deliverable, not an afterthought. |
| **Owner** | Chief Software Architect |

---

### DL-0004

| Field | Value |
|---|---|
| **Date** | 2025-01-01 |
| **Area** | Deployment |
| **Decision** | Use Vercel for both the marketing website and the platform dashboard frontend |
| **Rationale** | Next.js on Vercel provides automatic preview deployments, edge caching, and zero-configuration SSL. The operational overhead is negligible compared to self-hosting. The API backend remains on a VPS where full control is required. |
| **Owner** | Architecture team |

---

*New entries are added chronologically. Do not edit existing entries.*
