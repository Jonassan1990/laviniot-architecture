---
id: auth
title: Authentication
sidebar_position: 2
---

# Authentication

:::note Placeholder
This document describes the intended authentication design. Implementation details will be added as the API is built.
:::

## Token acquisition

### User JWT

```
POST /v1/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "..."
}
```

Response includes `access_token` (1 hour) and `refresh_token` (30 days).

### Refresh

```
POST /v1/auth/refresh
Authorization: Bearer <refresh_token>
```

### API Key creation

```
POST /v1/auth/api-keys
Authorization: Bearer <user_jwt>

{
  "name": "Edge collector – Site A",
  "scopes": ["telemetry:write"]
}
```

The plaintext key is returned once and never again.

---

## Scopes

| Scope | Permission |
|---|---|
| `telemetry:read` | Read telemetry data |
| `telemetry:write` | Write telemetry data |
| `devices:read` | Read device registry |
| `devices:write` | Create and update devices |
| `alarms:read` | Read alarms |
| `alarms:write` | Acknowledge and resolve alarms |
| `admin` | Full organisation access |
