---
id: models
title: Deployment Models
---

# Deployment Models

## Three models

```mermaid
graph TB
    subgraph Cloud["☁️ Cloud"]
        CV[Vercel Frontend]
        CA[VPS API]
        CV --> CA
    end

    subgraph Hybrid["☁️ + 🏭 Hybrid"]
        HV[Vercel Frontend]
        HA[VPS API]
        HE[Edge Module]
        HV --> HA
        HE --> HA
    end

    subgraph Edge["🏭 Edge-Only"]
        EE[Edge Module]
        EU[Local UI]
        EL[Local Store]
        EU --> EE --> EL
    end
```

## Model selection guide

| Requirement | Recommended model |
|---|---|
| Cloud connectivity always available | Cloud |
| Intermittent connectivity, cloud preferred | Hybrid |
| Air-gapped or strict data residency | Edge-Only |
| Time-critical local decisions + cloud reporting | Hybrid |
