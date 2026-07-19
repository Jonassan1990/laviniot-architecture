---
id: index
title: "08 · ADR"
sidebar_position: 1
---

<p class="section-meta">Section 08</p>

# Architecture Decision Records

> If it is not in an ADR, it did not happen. Every significant design choice has a context, a decision, and consequences. Record them all.

---

## Purpose of this section

An Architecture Decision Record (ADR) is the authoritative record of a significant architectural decision. It captures why a decision was made — not just what was decided. It is the institutional memory of the platform's design.

---

## When to write an ADR

Write an ADR when a decision:

- Affects module boundaries or the Core interface catalogue
- Introduces or removes an external dependency
- Changes an API contract or data model
- Affects security posture, multi-tenancy, or compliance
- Would be difficult or costly to reverse
- Would surprise a senior engineer reading the codebase six months from now

When in doubt: write the ADR. The cost of an unnecessary ADR is low. The cost of a missing one is high.

---

## ADR status values

| Status | Meaning |
|---|---|
| `Proposed` | Under discussion — not yet accepted |
| `Accepted` | Active and governing |
| `Deprecated` | Superseded by a newer ADR (kept for reference) |
| `Rejected` | Evaluated and rejected (kept for reference) |

---

## ADR index

| ID | Title | Status | Date |
|---|---|---|---|
| [ADR-0001](./ADR-0001-modularity) | The platform shall be modular | ✅ Accepted | 2025-01-01 |
| [ADR-0002](./ADR-0002-scalability) | The platform shall scale from 10 devices to enterprise without changing the core architecture | ✅ Accepted | 2025-01-01 |

---

## ADR template

```markdown
# ADR-XXXX: [Title]

| Field | Value |
|---|---|
| **Status** | Proposed / Accepted / Deprecated / Rejected |
| **Date** | YYYY-MM-DD |
| **Author** | [Name] |
| **Supersedes** | N/A |
| **Superseded by** | N/A |

## Context
[The situation that forces a decision]

## Decision
[What has been decided]

## Consequences

### Positive
### Negative
### Neutral

## Alternatives considered
[What else was evaluated, and why it was rejected]
```
