---
id: philosophy
title: Product Philosophy
---

# Product Philosophy

Product philosophy is not marketing. It is the set of durable principles that resolve trade-offs when the right answer is not obvious. Every significant design decision should be traceable to one or more of these principles.

---

## 1. Reliability over features

Industrial systems run continuously. A monitoring platform that is unreliable is more dangerous than no platform — because it creates false confidence. We ship fewer features and test them harder.

## 2. Operators are the primary users, not data scientists

Every interface, alert, and output must be immediately interpretable by a domain expert without analytical training. AI outputs are always explained in operational language.

## 3. The platform must earn trust before it acts

Automated actions carry real-world consequences. The platform surfaces recommendations with evidence. Automated actions require explicit operator configuration and an approval mechanism.

## 4. Integration is the product

The hardest problem in industrial IoT is not the analytics — it is connecting to the asset layer. Protocol providers are first-class architectural components. Integration quality is measured with the same rigor as feature quality.

## 5. Open by default, proprietary where it matters

The platform uses open standards (MQTT, REST, OPC-UA, JSON Schema) for all external interfaces. Proprietary coupling requires an ADR.

## 6. Security is structural

Authentication, multi-tenancy isolation, encryption, and audit logging are designed in at the architectural level. There is no "add security later" option.

## 7. The edge is not a degraded cloud

Edge deployments are a first-class deployment target for time-critical inference, local alarming, and network-constrained environments — not a fallback.
