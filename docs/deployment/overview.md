---
id: overview
title: Deployment Overview
sidebar_position: 1
---

# Deployment Overview

## Deployment models

LavinIoT supports three deployment models to accommodate different customer requirements:

```mermaid
graph TB
    subgraph Cloud["Cloud Deployment"]
        CV[Vercel — Frontend]
        CA[VPS — API Backend]
        CD[Cloud DB]
        CV --> CA --> CD
    end

    subgraph Hybrid["Hybrid Deployment"]
        HV[Vercel — Frontend]
        HA[VPS — API Backend]
        HD[Cloud DB]
        HE[Edge Module — Customer Site]
        HV --> HA --> HD
        HE --> HA
        HE --- LocalAssets[Local Assets]
    end

    subgraph Edge["Edge-Only"]
        EE[Edge Module]
        EL[Local DB]
        EU[Local UI]
        EE --- LocalAssets2[Local Assets]
        EE --> EL
        EU --> EE
    end
```

---

## Model selection guide

| Requirement | Recommended model |
|---|---|
| Cloud connectivity always available | Cloud |
| Intermittent connectivity, cloud preferred | Hybrid |
| Air-gapped or strict data residency | Edge-Only |
| Time-critical local decisions + cloud reporting | Hybrid |

---

## Current production topology

| Component | Location | URL |
|---|---|---|
| Marketing website | Vercel | `www.lavin-iot.com` |
| Platform dashboard | Vercel | `app.lavin-iot.com` |
| API backend | VPS (TBD) | `api.lavin-iot.com` |
| MQTT broker | VPS (TBD) | TBD |
| Time-series DB | VPS (TBD) | Internal only |

---

## Sections

- [Cloud](./cloud) — Cloud deployment topology and configuration
- [Edge](./edge) — Edge module deployment and operation
- [Hybrid](./hybrid) — Hybrid configuration and synchronisation
- [CI / CD](./ci-cd) — Build, test, and deployment pipelines
