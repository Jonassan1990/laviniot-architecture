---
id: auth
title: Authentication
---

# Authentication

## Token types

| Type | Lifetime | Use case |
|---|---|---|
| User JWT (RS256) | 1 hour / 30-day refresh | Dashboard, interactive clients |
| API Key (hashed) | Indefinite (revocable) | Device integrations, server-to-server |
| Edge Token | Configurable | Edge to Core |

## Acquisition

### Login

```
POST /v1/auth/login
{ "email": "...", "password": "..." }
→ { "access_token": "...", "refresh_token": "..." }
```

### Refresh

```
POST /v1/auth/refresh
Authorization: Bearer <refresh_token>
```

### Create API key

```
POST /v1/auth/api-keys
{ "name": "Edge collector – Site A", "scopes": ["telemetry:write"] }
→ { "key": "lv_live_...", "id": "..." }
```

The plaintext key is returned once only.

## Scopes

| Scope | Permission |
|---|---|
| `telemetry:read` | Read telemetry |
| `telemetry:write` | Write telemetry |
| `devices:read` | Read device registry |
| `devices:write` | Create and update devices |
| `alarms:read` | Read alarms |
| `alarms:write` | Acknowledge and resolve |
| `admin` | Full organisation access |
