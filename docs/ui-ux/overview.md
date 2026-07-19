---
id: overview
title: UI / UX Overview
sidebar_position: 1
---

# UI / UX Overview

## Platform interface philosophy

The LavinIoT dashboard serves **operators, not data scientists**. Every interface decision must be evaluated against this question:

> Can an operator who understands their process — but has no analytics background — use this to make a better decision?

If the answer is no, the interface needs redesign, not better documentation.

---

## Interface layers

| Layer | Description |
|---|---|
| **Marketing site** | `www.lavin-iot.com` — public-facing, Next.js, Vercel |
| **Operator dashboard** | `app.lavin-iot.com` — authenticated, Next.js, Vercel |
| **API** | `api.lavin-iot.com` — consumed by dashboard and integrations |

The dashboard is a standard REST API consumer. It has no privileged access to the platform beyond what the API provides.

---

## Design system

See [Design System](./design-system) for the token reference, component library, and usage rules.

Key commitments:
- **Colour palette**: LavinIoT Green (`#0B6E4F`) as primary, semantic colours for alarm states
- **Typography**: Inter, single typeface
- **Density**: Industrial environments use large screens at distance — minimum touch target 44px
- **Colour blindness**: All alarm states conveyed by colour AND symbol/icon

---

## Dashboard structure

See [Dashboard](./dashboard) for layout specifications and screen maps.

---

## Mobile

See [Mobile](./mobile) for responsive breakpoints and mobile-specific interaction patterns.

:::note Placeholder
Detailed wireframes and design specifications will be linked here as they are produced.
:::
