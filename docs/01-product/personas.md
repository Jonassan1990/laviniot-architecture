---
id: personas
title: User Personas
---

# User Personas

Personas are not marketing archetypes. They are engineering contracts. Every interface decision is evaluated against the persona who will use it.

---

## Persona 1: The Operator

**Who they are:**
A person responsible for the day-to-day operation of a facility — a factory floor, an energy plant, a water treatment station. They understand the physical process intimately. They do not have an analytics background.

**What they need from the platform:**
- To see the current status of their assets without hunting through menus
- To be notified when something is wrong — before it becomes a failure
- To understand *why* they were notified, in terms they recognise
- To acknowledge or act on an alarm without training

**What they do not need:**
- Raw telemetry charts with no context
- Statistical confidence intervals
- Configuration screens

**Design rule:** Every operator-facing interface must be usable without analytical training.

---

## Persona 2: The Engineer

**Who they are:**
A control engineer, instrumentation engineer, or maintenance engineer responsible for configuring and maintaining the monitored assets. They understand both the physical process and the instrumentation layer.

**What they need from the platform:**
- To register new devices and configure their schemas
- To define alarm rules based on their process knowledge
- To review historical telemetry for root-cause analysis
- To understand how the platform is processing their data

**What they do not need:**
- Database administration
- Infrastructure management
- AI model training

**Design rule:** Engineers configure behaviour. They should never need to touch the underlying infrastructure.

---

## Persona 3: The Technical Lead

**Who they are:**
A senior engineer or engineering manager responsible for the LavinIoT deployment across a site or organisation. Technically capable, but not necessarily an IoT specialist.

**What they need from the platform:**
- User and access management
- Organisation and site hierarchy management
- Audit logs and compliance reports
- Integration with existing IT systems

**Design rule:** Technical leads manage configuration. They do not operate the platform daily.

---

## Persona 4: The LavinIoT Engineer (internal)

**Who they are:**
An engineer building or maintaining the LavinIoT platform itself.

**What they need from this book:**
- To understand the architecture before writing code
- To know where their module fits in the system
- To find the API contract for any integration
- To record their decisions in ADRs and the Sprint Journal

**Design rule:** This persona is the primary reader of Lavin Book.
