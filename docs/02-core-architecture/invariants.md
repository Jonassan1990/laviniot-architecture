---
id: invariants
title: Design Invariants
---

# Design Invariants

Design invariants are rules that must never be violated. If a proposed change would violate an invariant, it requires a superseding ADR before any implementation proceeds.

---

## The invariants

| ID | Invariant | Consequence if violated |
|---|---|---|
| **INV-01** | The Core communicates with providers through interfaces only — never directly with a concrete class | Provider lock-in; Core becomes untestable |
| **INV-02** | Tenant data is isolated at the data model level — not the application level | Cross-tenant data leakage |
| **INV-03** | The API layer is stateless — all state lives in the Core | Session inconsistency; scaling impossibility |
| **INV-04** | The Edge module can operate without cloud connectivity | Edge becomes useless in outage scenarios |
| **INV-05** | All external interfaces are versioned | Breaking changes without migration path |
| **INV-06** | Every write operation is audited | Untraceability; compliance failure |
| **INV-07** | Modules do not import other modules directly | Circular dependencies; deployment coupling |
| **INV-08** | Provider selection is driven by configuration, not code | Technology cannot be changed without code changes |

---

## How to handle a conflict

If a proposed design requires violating an invariant:

1. Stop implementation
2. Raise it in the next engineering review
3. Draft an ADR that either proposes a new invariant or supersedes the conflicting one
4. Do not proceed until the ADR is accepted

Short-circuiting this process is not an option. Invariants exist precisely because the short-term cost of a workaround is lower than the long-term cost of the accumulated debt.
