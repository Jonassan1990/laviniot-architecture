---
id: overview
title: API Overview
sidebar_position: 1
---

# API Overview

## Design principles

- **REST over HTTP/1.1+** for all synchronous request/response interactions
- **MQTT** for device telemetry ingestion and real-time event subscriptions
- **WebSocket** for dashboard real-time updates (alarm feeds, live telemetry)
- **Versioned from day one** — the API version is part of every URL path
- **JSON everywhere** — all request and response bodies are `application/json`

---

## Base URL

| Environment | URL |
|---|---|
| Production | `https://api.lavin-iot.com/v1` |
| Staging | `https://api-staging.lavin-iot.com/v1` |
| Local development | `http://localhost:5000/v1` |

---

## Authentication

All requests require an `Authorization` header:

```
Authorization: Bearer <token>
```

See the [Authentication](./auth) section for token types and token acquisition flows.

---

## Versioning strategy

The API version is a path prefix (`/v1`, `/v2`). Minor additions (new optional fields, new endpoints) do not require a version bump. Breaking changes (removed fields, changed semantics, changed authentication) require a new major version.

Old versions are supported for a minimum of 12 months after a new major version is released.

---

## Response format

All successful responses follow this envelope:

```json
{
  "data": { ... },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2025-01-01T00:00:00Z"
  }
}
```

All error responses follow:

```json
{
  "error": {
    "code": "DEVICE_NOT_FOUND",
    "message": "Device with ID abc123 does not exist in this organisation",
    "request_id": "req_abc123"
  }
}
```

---

## Rate limiting

| Token type | Rate limit |
|---|---|
| User JWT | 1 000 requests / minute |
| API Key | 10 000 requests / minute |
| Edge Token | 100 000 requests / minute |

Rate limit headers are included in every response:
- `X-RateLimit-Limit`
- `X-RateLimit-Remaining`
- `X-RateLimit-Reset`

---

## Pagination

List endpoints use cursor-based pagination:

```
GET /v1/devices?cursor=eyJpZCI6MTIzfQ&limit=50
```

Response:

```json
{
  "data": [ ... ],
  "pagination": {
    "next_cursor": "eyJpZCI6MTczfQ",
    "has_more": true,
    "total": 340
  }
}
```

---

## API sections

| Section | Description |
|---|---|
| [Authentication](./auth) | Token acquisition, refresh, API key management |
| [Devices](./devices) | Device registration, configuration, status |
| [Telemetry](./telemetry) | Telemetry ingestion and query |
| [Alarms](./alarms) | Alarm rules, triggered alarms, acknowledgement |
| [Organizations](./organizations) | Tenant hierarchy management |

:::note Placeholder
Full OpenAPI specification will be maintained in this repository once the API implementation is underway. This document describes the design intent and contract commitments.
:::
