---
id: conventions
title: API Conventions
---

# API Conventions

## Design rules

- REST over HTTP/1.1+ for synchronous request/response
- MQTT for device telemetry ingestion and real-time event subscriptions
- WebSocket for dashboard real-time updates
- Versioned from day one — version is part of the path (`/v1`, `/v2`)
- JSON everywhere — `application/json` for all request and response bodies
- Plural resource names: `/devices`, `/alarms`, `/organisations`
- UUID identifiers for all resources

## Response envelope

```json
{
  "data": { },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2025-01-01T00:00:00Z"
  }
}
```

## Error envelope

```json
{
  "error": {
    "code": "DEVICE_NOT_FOUND",
    "message": "Device abc123 does not exist in this organisation",
    "request_id": "req_abc123"
  }
}
```

## Pagination (cursor-based)

```
GET /v1/devices?cursor=eyJpZCI6MTIzfQ&limit=50
```

```json
{
  "data": [],
  "pagination": {
    "next_cursor": "eyJpZCI6MTczfQ",
    "has_more": true,
    "total": 340
  }
}
```

## Rate limits

| Token type | Limit |
|---|---|
| User JWT | 1 000 req/min |
| API Key | 10 000 req/min |
| Edge Token | 100 000 req/min |

Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`.

## Versioning strategy

Minor additions (new optional fields, new endpoints) do not require a version bump. Breaking changes require a new major version. Old versions are supported for 12 months minimum after a new major version is released.
