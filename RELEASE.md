# Lavin Book — Production Release

**Release Date:** 2026-07-19  
**Sprint:** Platform Architecture Sprint 1

---

## Deployment Summary

| Field | Value |
|---|---|
| **Production URL** | https://book.lavin-iot.com |
| **Vercel Canonical URL** | https://laviniot-architecture.vercel.app |
| **GitHub Repository** | https://github.com/Jonassan1990/laviniot-architecture |
| **Build Status** | ✅ SUCCESS |
| **Deployment Status** | ✅ READY (Production) |
| **Preview Deployment** | ✅ PASSED — promoted to Production |

---

## Git

| Field | Value |
|---|---|
| **Production Commit** | `220de86f1f37e82ff3c26cb2a7a65bb226b5c75d` |
| **Branch** | `main` |
| **Preview Deployment ID** | `dpl_7HyLNc5FDmXnEMex5d528io1AfVS` |
| **Production Deployment ID** | `dpl_HuXG53acF5ngXM73AyHKJdo2Qhd1` |
| **Vercel Project ID** | `prj_1klbMdit5x34zzB85g2GAuHhQWDL` |

---

## Build Details

| Field | Value |
|---|---|
| **Framework** | Docusaurus 3.10.2 |
| **Node version** | 22.14.0 |
| **Build command** | `npm run build` |
| **Output directory** | `build/` |
| **Build time** | ~20 seconds |
| **Warnings** | 1 (deprecated `onBrokenMarkdownLinks` config — non-blocking, will migrate in Docusaurus v4) |
| **Errors** | 0 |

---

## QA Verification

### Preview deployment (before promotion)

| Check | Result |
|---|---|
| Home page loads (200) | ✅ PASS |
| Engineering Principles page | ✅ PASS |
| All 11 sections accessible | ✅ PASS |
| ADR-0001 content verified | ✅ PASS |
| ADR-0002 content verified | ✅ PASS |
| Sidebar present in SSR | ✅ PASS |
| Dark mode (data-theme) present | ✅ PASS |
| Search present | ✅ PASS |
| Footer present | ✅ PASS |
| Announcement bar present | ✅ PASS |
| Mermaid configured (client-side) | ✅ PASS (local build verified) |
| 35/35 pages return 200 | ✅ PASS |
| No broken links (build-time check) | ✅ PASS |
| No missing pages | ✅ PASS |

### Production domain

| Check | Result |
|---|---|
| book.lavin-iot.com resolves | ✅ PASS — HTTP 200 |
| Title: "Lavin Book" | ✅ PASS |
| HTTPS (TLS) | ✅ PASS — Vercel managed certificate |
| 14/14 key pages verified on production domain | ✅ PASS |

---

## Lighthouse (estimated)

> Lighthouse was not run via automated tooling in this deployment. Estimates based on Docusaurus 3.x defaults and the configuration used:

| Category | Estimated Score | Notes |
|---|---|---|
| Performance | ~85–90 | Static Docusaurus site; Vercel CDN; no external blocking resources |
| Accessibility | ~90–95 | Semantic HTML, ARIA labels, sufficient colour contrast (LavinIoT green on white) |
| Best Practices | ~95 | HTTPS, no console errors, modern image formats |
| SEO | ~90 | Meta tags, sitemap, canonical URLs via Vercel |

To run actual Lighthouse: open `https://book.lavin-iot.com` in Chrome DevTools → Lighthouse → Generate report.

---

## What was released

### Repository
- 69 files across 11 numbered sections
- Docusaurus 3.10.2 (upgraded from 3.7.0 for Node 22 compatibility)

### Content
| Section | Pages |
|---|---|
| ⚙️ Engineering Principles | 9 principles with full rationale and ADR cross-links |
| 00 Vision | Mission, Strategic Constraints, North Star |
| 01 Product | Philosophy, 4 User Personas, Roadmap (Phase 1–3) |
| 02 Core Architecture | Topology, Core, Providers, Security, 8 Design Invariants |
| 03 Module Catalog | 7 modules with event schemas and dependency declarations |
| 04 Data Model | ER diagram, Telemetry Schema, Multi-Tenancy, Retention |
| 05 UX & Design System | Principles, Tokens, Components, Dashboard, Mobile |
| 06 APIs & SDKs | Conventions, Auth, REST, MQTT, Webhooks, SDK Roadmap |
| 07 Deployment | Cloud, Edge, Hybrid, CI/CD, Runbooks |
| 08 ADR | ADR-0001 (Modularity) + ADR-0002 (Scalability) |
| 09 Sprint Journal | Sprint 01 |
| 10 Release Notes | Website v1 |

### ADRs
- **ADR-0001** — The platform shall be modular (Accepted)
- **ADR-0002** — The platform shall scale from 10 devices to enterprise without changing the core architecture (Accepted)

---

## Known Issues

| Issue | Severity | Status |
|---|---|---|
| `onBrokenMarkdownLinks` config option deprecated (Docusaurus v4 migration needed) | Low | Non-blocking warning. Will migrate in future sprint. |
| Mermaid diagrams are client-side rendered — not visible in SSR HTML | Informational | Expected Docusaurus behavior. Renders correctly in browsers. |
| DNS IP `64.29.17.65` is older Vercel IP; Vercel recommends `76.76.21.21` | Low | Domain resolves correctly. Update DNS A record to `76.76.21.21` in next maintenance window. |

**No critical issues.** No blocking issues.

---

## DNS Configuration

To update the DNS A record to Vercel's recommended IP:

| Record type | Name | Value |
|---|---|---|
| A | `book` | `76.76.21.21` |

Current record (`64.29.17.65`) works but is the older Vercel IP.

---

## Next Sprint

**Sprint 2 — Platform Foundation**

| Task | Priority |
|---|---|
| Flask API backend scaffold (`api.lavin-iot.com`) | Critical |
| Platform dashboard scaffold (`app.lavin-iot.com`) | Critical |
| MQTT ingestion module | High |
| Device registry API endpoints | High |
| OPC-UA protocol provider (stub) | High |
| Telemetry storage (InfluxDB provider) | High |
| Add GitHub Actions CI workflow to laviniot-architecture | Medium |
| Run actual Lighthouse audit and record scores in Lavin Book | Medium |
| Migrate `onBrokenMarkdownLinks` to Docusaurus v4 format | Low |
| Update DNS A record to `76.76.21.21` | Low |

---

*Lavin Book — Platform Architecture Sprint 1 sign-off.*  
*Released: 2026-07-19 — Chief Software Architect, LavinIoT*
