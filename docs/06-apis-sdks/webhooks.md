---
id: webhooks
title: Webhooks
---

# Webhooks

:::note Placeholder
Webhook delivery specification will be completed when the Notification Manager is implemented.
:::

## Overview

Webhooks allow external systems to subscribe to platform events via HTTP POST. The platform sends a signed JSON payload to the configured endpoint when an event occurs.

## Planned events

| Event | Trigger |
|---|---|
| `alarm.triggered` | Alarm rule condition met |
| `alarm.acknowledged` | Operator acknowledges alarm |
| `alarm.resolved` | Alarm condition cleared |
| `device.connected` | Device connects to platform |
| `device.disconnected` | Device disconnects |

## Payload signature

All webhook payloads include a `X-LavinIoT-Signature` header containing an HMAC-SHA256 signature of the payload using the webhook secret. Receivers must verify this signature before processing.
