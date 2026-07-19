---
id: index
title: "07 · Deployment"
sidebar_position: 1
---

<p class="section-meta">Section 07</p>

# Deployment

> The platform is not deployed once. It is deployed repeatedly, in multiple configurations, across different customer environments. This section governs every deployment decision.

---

## Purpose of this section

Deployment covers how the platform runs in production — infrastructure topology, CI/CD pipelines, edge deployment, and operational runbooks. It is the reference for any engineer preparing or troubleshooting a deployment.

---

## In this section

| Page | Description |
|---|---|
| [Deployment Models](./models) | Cloud, Edge, Hybrid — when to use each |
| [Cloud](./cloud) | Cloud infrastructure and configuration |
| [Edge](./edge) | Edge module deployment and hardware targets |
| [Hybrid](./hybrid) | Hybrid configuration and synchronisation |
| [CI / CD](./ci-cd) | Build, test, and release pipelines |
| [Runbooks](./runbooks) | Operational procedures |

---

## Current production topology

| Component | Location | URL |
|---|---|---|
| Marketing website | Vercel | `www.lavin-iot.com` |
| Platform dashboard | Vercel | `app.lavin-iot.com` (planned) |
| API backend | VPS | `api.lavin-iot.com` (planned) |
| MQTT broker | VPS | TBD |
| Time-series DB | VPS | Internal |
