---
id: strategic-constraints
title: Strategic Constraints
---

# Strategic Constraints

Strategic constraints are permanent. They are not backlog items, not technical debt, and not things that will be "addressed later." They shape every architectural decision.

If a proposed design violates a strategic constraint, it requires a superseding ADR — not a workaround.

---

## The constraints

### 1. Data sovereignty

Customer operational data never leaves the customer's designated region without explicit, written permission.

**Architectural consequence:** Multi-region deployment support from day one. No cross-region data replication by default. Tenant configuration specifies region at onboarding.

---

### 2. Protocol interoperability

OPC-UA, MQTT, Modbus, and REST are first-class citizens. The platform must integrate with existing industrial infrastructure — it does not require customers to replace it.

**Architectural consequence:** Protocol providers are a core architectural component. New protocols are added through providers — not through core changes.

---

### 3. Edge-first AI

AI inference must be available where connectivity is limited. The platform cannot assume cloud connectivity for time-critical decisions.

**Architectural consequence:** The edge module is a first-class deployment target. ONNX-compatible local inference is supported. See [ADR-0001](/08-adr/ADR-0001-modularity) and [07 Deployment](/07-deployment).

---

### 4. EU regulatory alignment

GDPR and NIS2 compliance are baseline requirements, not optional features or future roadmap items.

**Architectural consequence:** All data storage defaults to EU regions. User data deletion is supported. Audit logs are immutable. Consent mechanisms are built in.

---

### 5. Industrial reliability

The platform operates in environments where failures have real physical and financial consequences. Uptime, data integrity, and alarm accuracy are non-negotiable.

**Architectural consequence:** The platform ships fewer features and tests them harder. A feature that introduces alarm noise or risks data loss does not ship.
