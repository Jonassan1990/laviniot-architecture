---
id: multi-tenancy
title: Multi-Tenancy
---

# Multi-Tenancy

## Approach

LavinIoT uses **shared infrastructure, isolated data** multi-tenancy. All tenants share the same platform runtime. Data is isolated by `organisation_id` at the database level.

## Enforcement layers

| Layer | Enforcement |
|---|---|
| Data model | Every entity has `organisation_id` |
| Core query builder | `organisation_id` is injected into every query — cannot be omitted |
| API layer | Authenticated user's `organisation_id` is taken from their JWT — user cannot override it |
| Audit log | Every write records `organisation_id` |

## What is shared across tenants

- Platform runtime (process)
- Message bus infrastructure
- Protocol provider connections

## What is isolated per tenant

- All data records
- Alarm rules and active alarms
- User accounts and roles
- Device schemas and configurations
- API keys

## Testing requirements

Multi-tenant isolation must be covered by explicit cross-tenant penetration test cases. A test that reads `organisation_id = A`'s data while authenticated as `organisation_id = B` must return an authorisation error, not empty results and not the data.
