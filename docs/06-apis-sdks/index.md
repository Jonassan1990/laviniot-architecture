---
id: index
title: "06 · APIs & SDKs"
sidebar_position: 1
---

<p class="section-meta">Section 06</p>

# APIs & SDKs

> API contracts are as important as code. Breaking an API contract without a versioning strategy breaks every integration built on top of it.

---

## Purpose of this section

This section is the authoritative reference for all external interfaces of the LavinIoT platform. Before implementing any endpoint, the contract must be documented here first.

---

## In this section

| Page | Description |
|---|---|
| [API Conventions](./conventions) | Design rules, response format, pagination, error handling |
| [Authentication](./auth) | Token types, scopes, acquisition flows |
| [REST Reference](./rest-reference) | All REST endpoints by resource |
| [MQTT Reference](./mqtt-reference) | Topic schema and payload contracts |
| [Webhooks](./webhooks) | Outbound event delivery |
| [SDK Roadmap](./sdk-roadmap) | Planned client libraries |

---

## Base URLs

| Environment | URL |
|---|---|
| Production | `https://api.lavin-iot.com/v1` |
| Staging | `https://api-staging.lavin-iot.com/v1` |
| Local | `http://localhost:5000/v1` |
