---
id: product-philosophy
title: Product Philosophy
sidebar_position: 3
---

# Product Philosophy

Product philosophy is not marketing. It is the set of durable principles that govern trade-offs when the right answer is not obvious.

Every significant design decision should be traceable to one or more of these principles.

---

## 1. Reliability over features

Industrial systems run continuously. A monitoring platform that is unreliable is more dangerous than no platform — because it creates false confidence.

**Consequence:** We ship fewer features and test them harder. A feature that risks data loss or false alarms does not ship.

---

## 2. Operators are the primary users, not data scientists

The platform output is consumed by operators — people who manage assets, not people who build models. Every interface, alert, and output must be immediately interpretable by a domain expert without analytical training.

**Consequence:** AI outputs are always explained in operational language. Confidence scores are translated into operational states. Raw model outputs are never surfaced directly.

---

## 3. The platform must earn trust before it acts

Automated actions (alerts, notifications, control signals) carry real-world consequences. The platform must establish a track record of accuracy before any operator delegates decision authority to it.

**Consequence:** The platform always surfaces recommendations with evidence. Automated actions require explicit operator configuration and an approval mechanism.

---

## 4. Integration is the product

The hardest problem in industrial IoT is not the analytics — it is connecting to the asset layer. OPC-UA, Modbus, MQTT, legacy historians, PLC protocols: the platform must absorb this complexity so operators do not have to.

**Consequence:** Protocol providers are first-class architectural components. Integration quality is measured with the same rigor as feature quality.

---

## 5. Open by default, proprietary where it matters

The platform uses open standards (MQTT, REST, OPC-UA, JSON Schema) for all external interfaces. Proprietary coupling is only acceptable when a capability cannot be achieved any other way — and that decision requires an ADR.

**Consequence:** Every external interface is documented and contract-tested. Vendors are replaceable.

---

## 6. Security is structural

Security requirements that are grafted onto a system after it is designed are always incomplete. Authentication, multi-tenancy isolation, encryption, and audit logging are designed in at the architectural level.

**Consequence:** The data model is multi-tenant from day one. There is no "add security later" option on the roadmap.

---

## 7. The edge is not a degraded cloud

Edge deployments are not a fallback for poor connectivity — they are a first-class deployment target for time-critical inference, local alarming, and network-constrained environments.

**Consequence:** The architecture explicitly supports edge modules that operate independently and synchronise when connectivity is restored.

---

## How to apply these principles

When a design decision creates tension — for example, a feature that is fast to build but compromises reliability — use these principles to resolve it:

1. Identify which principles apply to the decision
2. Determine which principle takes precedence (the ordering above reflects priority)
3. Document the trade-off in the Decision Log or an ADR
