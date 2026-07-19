import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  architectureSidebar: [
    {
      type: "doc",
      id: "intro",
      label: "Portal Home",
    },
    {
      type: "doc",
      id: "vision",
      label: "Vision",
    },
    {
      type: "doc",
      id: "product-philosophy",
      label: "Product Philosophy",
    },
    {
      type: "category",
      label: "Architecture",
      collapsible: true,
      collapsed: false,
      items: [
        { type: "doc", id: "architecture/overview", label: "Overview" },
        { type: "doc", id: "architecture/core", label: "Core" },
        { type: "doc", id: "architecture/modules", label: "Modules" },
        { type: "doc", id: "architecture/providers", label: "Providers" },
        { type: "doc", id: "architecture/data-model", label: "Data Model" },
        { type: "doc", id: "architecture/security", label: "Security" },
      ],
    },
    {
      type: "category",
      label: "API",
      collapsible: true,
      collapsed: true,
      items: [
        { type: "doc", id: "api/overview", label: "Overview" },
        { type: "doc", id: "api/auth", label: "Authentication" },
        { type: "doc", id: "api/devices", label: "Devices" },
        { type: "doc", id: "api/telemetry", label: "Telemetry" },
        { type: "doc", id: "api/alarms", label: "Alarms" },
        { type: "doc", id: "api/organizations", label: "Organizations" },
      ],
    },
    {
      type: "category",
      label: "UI / UX",
      collapsible: true,
      collapsed: true,
      items: [
        { type: "doc", id: "ui-ux/overview", label: "Overview" },
        { type: "doc", id: "ui-ux/design-system", label: "Design System" },
        { type: "doc", id: "ui-ux/dashboard", label: "Dashboard" },
        { type: "doc", id: "ui-ux/mobile", label: "Mobile" },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      collapsible: true,
      collapsed: true,
      items: [
        { type: "doc", id: "deployment/overview", label: "Overview" },
        { type: "doc", id: "deployment/cloud", label: "Cloud" },
        { type: "doc", id: "deployment/edge", label: "Edge" },
        { type: "doc", id: "deployment/hybrid", label: "Hybrid" },
        { type: "doc", id: "deployment/ci-cd", label: "CI / CD" },
      ],
    },
    {
      type: "doc",
      id: "roadmap",
      label: "Roadmap",
    },
    {
      type: "category",
      label: "ADR",
      collapsible: true,
      collapsed: false,
      link: { type: "doc", id: "adr/index" },
      items: [
        {
          type: "doc",
          id: "adr/ADR-0001-modularity",
          label: "ADR-0001 · The platform shall be modular",
        },
      ],
    },
    {
      type: "category",
      label: "Sprint Notes",
      collapsible: true,
      collapsed: true,
      link: { type: "doc", id: "sprint-notes/index" },
      items: [
        { type: "doc", id: "sprint-notes/sprint-01", label: "Sprint 01" },
      ],
    },
    {
      type: "doc",
      id: "decision-log",
      label: "Decision Log",
    },
  ],
};

export default sidebars;
