---
id: sdk-roadmap
title: SDK Roadmap
---

# SDK Roadmap

:::note Placeholder
SDKs will be planned and scoped as the REST API stabilises.
:::

## Planned SDKs

| SDK | Language | Priority | Status |
|---|---|---|---|
| Python SDK | Python | High — edge modules and integrations | Backlog |
| TypeScript SDK | TypeScript | Medium — dashboard and Next.js usage | Backlog |
| REST API Collection | Postman / Bruno | High — developer experience | Backlog |

## SDK design rules

1. SDKs are generated from the OpenAPI specification — not hand-written
2. SDKs are versioned in sync with the API major version
3. SDKs expose the same concepts as the API — no abstraction layers that hide the contract
