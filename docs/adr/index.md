---
id: index
title: Architecture Decision Records
sidebar_position: 1
---

# Architecture Decision Records

## Purpose

An Architecture Decision Record (ADR) is the authoritative record of a significant architectural decision. It captures:

- **Context** — the situation that forced a decision
- **Decision** — what was decided
- **Status** — current status of the decision
- **Consequences** — what becomes easier, harder, or impossible as a result
- **Alternatives considered** — what else was evaluated and why it was rejected

ADRs are **immutable after acceptance**. If a decision is reversed, a new ADR is written that supersedes the previous one. The original ADR is marked deprecated and linked to its successor.

---

## When to write an ADR

Write an ADR whenever a decision:

- Affects module boundaries
- Introduces or removes an external dependency
- Changes an API contract
- Affects security posture or data model
- Would be difficult or costly to reverse
- Would surprise a new engineer reading the codebase

If in doubt: write the ADR. The cost of an unnecessary ADR is low. The cost of a missing one is high.

---

## ADR status values

| Status | Meaning |
|---|---|
| `Proposed` | Under discussion — not yet accepted |
| `Accepted` | Active and governing |
| `Deprecated` | Superseded by a newer ADR |
| `Rejected` | Evaluated and rejected (kept for reference) |

---

## ADR index

| ID | Title | Status | Date |
|---|---|---|---|
| [ADR-0001](./ADR-0001-modularity) | The platform shall be modular | ✅ Accepted | 2025-01-01 |

---

## ADR template

```markdown
# ADR-XXXX: [Title]

**Status:** Proposed | Accepted | Deprecated | Rejected
**Date:** YYYY-MM-DD
**Author:** [Name]
**Supersedes:** N/A
**Superseded by:** N/A

## Context

[What is the situation that forces this decision?]

## Decision

[What has been decided?]

## Consequences

### Positive
- ...

### Negative
- ...

### Neutral
- ...

## Alternatives considered

### [Alternative 1]
[Why it was rejected]

### [Alternative 2]
[Why it was rejected]
```
