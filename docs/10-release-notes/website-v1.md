---
id: website-v1
title: "Website v1 · Release"
---

# Website v1 · Release

| Field | Value |
|---|---|
| **Component** | Marketing website |
| **URL** | `https://www.lavin-iot.com` |
| **Status** | ✅ Released |
| **Sprint** | [Sprint 01](/09-sprint-journal/sprint-01) |

---

## What shipped

### New
- Marketing website live at `www.lavin-iot.com` on Vercel
- Hero section with honest platform description
- Platform capabilities section (qualitative, no fabricated metrics)
- Contact form via Next.js Server Action + Nodemailer (Zoho SMTP)
- Responsive navigation with mobile menu
- Footer with phone and email contact

### Changed
- All fabricated metrics removed from statistics, benefits, and platform sections
- Fictional testimonials replaced with NDA disclaimer and contact link
- Fictional case study client names and results removed
- Fictional office address removed from footer and JSON-LD schema

### Fixed
- Contact form previously fell back to `mailto:` — replaced with working Server Action
- Outdated "Swedish AI & IoT" hero eyebrow corrected to "AI & Industrial IoT"
- Fabricated email address replaced with live `info@lavin-iot.com`

### Removed
- Formspree dependency
- Static `output: "export"` restriction (now conditional for Server Action support)
- All placeholder testimonials and case study claims

---

## Known issues at release

None. All 7 critical blockers identified in QA audit were resolved and verified on the live site before sign-off.

---

## QA sign-off

All items verified on the live production site at `https://www.lavin-iot.com` before release.  
Sign-off documented in `RELEASE-READY.md` in the `laviniot-website` repository.
