import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "LavinIoT Architecture",
  tagline: "Single source of truth for platform design, decisions, and governance",
  favicon: "img/favicon.ico",

  url: "https://architecture.lavin-iot.com",
  baseUrl: "/",

  organizationName: "Jonassan1990",
  projectName: "laviniot-architecture",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl: "https://github.com/Jonassan1990/laviniot-architecture/edit/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/laviniot-social.png",

    navbar: {
      title: "LavinIoT Architecture",
      logo: {
        alt: "LavinIoT",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "architectureSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://www.lavin-iot.com",
          label: "lavin-iot.com",
          position: "right",
        },
        {
          href: "https://github.com/Jonassan1990/laviniot-architecture",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Architecture",
          items: [
            { label: "Vision", to: "/vision" },
            { label: "Core", to: "/architecture/core" },
            { label: "ADR", to: "/adr" },
          ],
        },
        {
          title: "Platform",
          items: [
            { label: "API Reference", to: "/api/overview" },
            { label: "Deployment", to: "/deployment/overview" },
            { label: "Security", to: "/architecture/security" },
          ],
        },
        {
          title: "Governance",
          items: [
            { label: "Decision Log", to: "/decision-log" },
            { label: "Sprint Notes", to: "/sprint-notes" },
            { label: "Roadmap", to: "/roadmap" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LavinIoT. Architecture documentation — internal governance.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["python", "bash", "yaml", "json", "typescript", "sql"],
    },

    mermaid: {
      theme: { light: "neutral", dark: "dark" },
      options: {
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: 14,
      },
    },

    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    announcementBar: {
      id: "internal",
      content:
        "🏗️ This is an internal architecture portal — not customer-facing documentation.",
      backgroundColor: "#0B6E4F",
      textColor: "#ffffff",
      isCloseable: true,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
