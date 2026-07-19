---
id: runbooks
title: Runbooks
---

# Runbooks

:::note Placeholder
Operational runbooks will be authored as each component reaches production readiness.
:::

## Planned runbooks

| Runbook | Trigger |
|---|---|
| API backend restart | Service crash or unresponsive |
| MQTT broker restart | Broker crash or connection issues |
| Time-series DB disk alert | Storage approaching capacity |
| Edge module reconnect | Extended connectivity outage |
| Certificate rotation | TLS certificate expiry |
| API key rotation | Suspected key compromise |

## Runbook format

Each runbook must include:
1. **Trigger** — what situation this runbook addresses
2. **Impact** — what users or systems are affected while this runbook is in progress
3. **Prerequisites** — access, tools, and context required
4. **Steps** — numbered, sequential, copy-pasteable commands
5. **Verification** — how to confirm the runbook succeeded
6. **Escalation** — when and who to contact if the runbook does not resolve the issue
