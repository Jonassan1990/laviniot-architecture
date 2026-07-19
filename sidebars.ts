import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  bookSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "📘 Lavin Book",
    },
    {
      type: "doc",
      id: "engineering-principles",
      label: "⚙️ Engineering Principles",
    },
    {
      type: "category",
      label: "00 · Vision",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "vision/index" },
      items: [
        { type: "doc", id: "vision/mission", label: "Mission" },
        { type: "doc", id: "vision/strategic-constraints", label: "Strategic Constraints" },
        { type: "doc", id: "vision/north-star", label: "North Star" },
      ],
    },
    {
      type: "category",
      label: "01 · Product",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "product/index" },
      items: [
        { type: "doc", id: "product/philosophy", label: "Product Philosophy" },
        { type: "doc", id: "product/personas", label: "User Personas" },
        { type: "doc", id: "product/roadmap", label: "Roadmap" },
      ],
    },
    {
      type: "category",
      label: "02 · Core Architecture",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "core-architecture/index" },
      items: [
        { type: "doc", id: "core-architecture/topology", label: "Platform Topology" },
        { type: "doc", id: "core-architecture/core", label: "Core" },
        { type: "doc", id: "core-architecture/providers", label: "Providers" },
        { type: "doc", id: "core-architecture/security", label: "Security" },
        { type: "doc", id: "core-architecture/invariants", label: "Design Invariants" },
      ],
    },
    {
      type: "category",
      label: "03 · Module Catalog",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "module-catalog/index" },
      items: [
        { type: "doc", id: "module-catalog/telemetry-manager", label: "Telemetry Manager" },
        { type: "doc", id: "module-catalog/alarm-manager", label: "Alarm Manager" },
        { type: "doc", id: "module-catalog/device-manager", label: "Device Manager" },
        { type: "doc", id: "module-catalog/ai-engine", label: "AI Engine" },
        { type: "doc", id: "module-catalog/notification-manager", label: "Notification Manager" },
        { type: "doc", id: "module-catalog/integration-bus", label: "Integration Bus" },
        { type: "doc", id: "module-catalog/organisation-manager", label: "Organisation Manager" },
      ],
    },
    {
      type: "category",
      label: "04 · Data Model",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "data-model/index" },
      items: [
        { type: "doc", id: "data-model/entities", label: "Entities" },
        { type: "doc", id: "data-model/telemetry-schema", label: "Telemetry Schema" },
        { type: "doc", id: "data-model/multi-tenancy", label: "Multi-Tenancy" },
        { type: "doc", id: "data-model/retention", label: "Data Retention" },
      ],
    },
    {
      type: "category",
      label: "05 · UX & Design System",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "ux-design-system/index" },
      items: [
        { type: "doc", id: "ux-design-system/design-principles", label: "Design Principles" },
        { type: "doc", id: "ux-design-system/tokens", label: "Design Tokens" },
        { type: "doc", id: "ux-design-system/components", label: "Components" },
        { type: "doc", id: "ux-design-system/dashboard", label: "Dashboard Spec" },
        { type: "doc", id: "ux-design-system/mobile", label: "Mobile" },
      ],
    },
    {
      type: "category",
      label: "06 · APIs & SDKs",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "apis-sdks/index" },
      items: [
        { type: "doc", id: "apis-sdks/conventions", label: "API Conventions" },
        { type: "doc", id: "apis-sdks/auth", label: "Authentication" },
        { type: "doc", id: "apis-sdks/rest-reference", label: "REST Reference" },
        { type: "doc", id: "apis-sdks/mqtt-reference", label: "MQTT Reference" },
        { type: "doc", id: "apis-sdks/webhooks", label: "Webhooks" },
        { type: "doc", id: "apis-sdks/sdk-roadmap", label: "SDK Roadmap" },
      ],
    },
    {
      type: "category",
      label: "07 · Deployment",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "deployment/index" },
      items: [
        { type: "doc", id: "deployment/models", label: "Deployment Models" },
        { type: "doc", id: "deployment/cloud", label: "Cloud" },
        { type: "doc", id: "deployment/edge", label: "Edge" },
        { type: "doc", id: "deployment/hybrid", label: "Hybrid" },
        { type: "doc", id: "deployment/ci-cd", label: "CI / CD" },
        { type: "doc", id: "deployment/runbooks", label: "Runbooks" },
      ],
    },
    {
      type: "category",
      label: "08 · ADR",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "adr/index" },
      items: [
        {
          type: "doc",
          id: "adr/ADR-0001-modularity",
          label: "ADR-0001 · Modular Platform",
        },
        {
          type: "doc",
          id: "adr/ADR-0002-scalability",
          label: "ADR-0002 · Scale Without Core Change",
        },
      ],
    },
    {
      type: "category",
      label: "09 · Sprint Journal",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "sprint-journal/index" },
      items: [
        { type: "doc", id: "sprint-journal/sprint-01", label: "Sprint 01" },
      ],
    },
    {
      type: "category",
      label: "10 · Release Notes",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "release-notes/index" },
      items: [
        { type: "doc", id: "release-notes/website-v1", label: "Website v1 · Release" },
      ],
    },
  ],
};

export default sidebars;
