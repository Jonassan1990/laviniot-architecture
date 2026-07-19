---
id: ai-engine
title: AI Engine
---

# AI Engine

| Field | Value |
|---|---|
| **Module ID** | `ai-engine` |
| **Status** | Planned |
| **Dependencies** | `IAIProvider`, `IMessageBus` |

## Purpose

Subscribes to `telemetry.received` events and routes data to configured AI models via the `IAIProvider` interface. Emits typed inference results as events. Does not contain model logic — it orchestrates inference through the provider.

## Events consumed

| Event | Action |
|---|---|
| `telemetry.received` | Route to configured model if device has AI rule |

## Events produced

| Event | Consumers |
|---|---|
| `inference.result` | Alarm Manager |

## AI provider interface

```
IAIProvider {
  infer(modelId: string, input: TelemetryBatch): InferenceResult
  listModels(): ModelDescriptor[]
}
```

The AI Engine never calls a specific AI library. It calls the `IAIProvider` interface. The concrete implementation (ONNX, Azure ML) is selected by configuration.

:::note Placeholder
Model configuration schema and inference result format will be documented when Phase 2 (Intelligence) begins.
:::
