---
id: index
title: "02 · Core Architecture"
sidebar_position: 1
---

<p class="section-meta">Section 02</p>

# Core Architecture

> This section is the structural blueprint of the platform. Every engineer must read this section before building any module, provider, or API.

---

## Purpose of this section

Core Architecture defines how the platform is structured, what each layer is responsible for, and what rules can never be broken. It is the reference for any dispute about "where does this belong?"

---

## In this section

| Page | Description |
|---|---|
| [Platform Topology](./topology) | The 4-layer diagram and layer responsibilities |
| [Core](./core) | Core responsibilities, interface catalogue, event bus |
| [Providers](./providers) | Provider contracts, catalogue, replaceability rules |
| [Security](./security) | Auth, RBAC, isolation, audit log |
| [Design Invariants](./invariants) | The rules that can never be violated |

---

## Architecture in one paragraph

The platform is organised into four horizontal layers: **Asset** (physical devices), **Edge** (local processing and AI), **Platform Core** (business logic and providers), and **Presentation** (API and UI). The Core is the authority — it knows only interfaces, never concrete implementations. Modules are discrete capability units registered with the Core. Providers implement the Core interfaces for specific technologies. The architecture is modular by design (see [ADR-0001](/08-adr/ADR-0001-modularity)) and scales without core changes (see [ADR-0002](/08-adr/ADR-0002-scalability)).
