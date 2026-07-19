---
id: organizations
title: Organizations
sidebar_position: 6
---

# Organizations API

:::note Placeholder
Full endpoint documentation will be added during API implementation sprints.
:::

## Key endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/v1/organisations` | List accessible organisations |
| `GET` | `/v1/organisations/:id` | Get organisation details |
| `GET` | `/v1/organisations/:id/sites` | List sites |
| `POST` | `/v1/organisations/:id/sites` | Create a site |
| `GET` | `/v1/organisations/:id/users` | List users |
| `POST` | `/v1/organisations/:id/users` | Invite a user |
| `PATCH` | `/v1/organisations/:id/users/:userId` | Update user role |
