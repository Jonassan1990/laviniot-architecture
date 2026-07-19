import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Lavin Book",
  tagline: "The engineering handbook of LavinIoT.",
  favicon: "img/logo-icon.svg",

  url: "https://book.lavin-iot.com",
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

  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",
          editUrl:
            "https://github.com/Jonassan1990/laviniot-architecture/edit/main/",
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

    metadata: [
      { name: "theme-color", content: "#0b1d3a" },
    ],

    navbar: {
      title: "Lavin Book",
      logo: {
        alt: "LavinIoT",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
        width: 32,
        height: 32,
      },
      hideOnScroll: false,
      items: [
        {
          type: "docSidebar",
          sidebarId: "bookSidebar",
          position: "left",
          label: "Handbook",
        },
        {
          to: "/engineering-principles",
          label: "Principles",
          position: "left",
        },
        {
          to: "/adr",
          label: "ADR",
          position: "left",
        },
        {
          href: "https://www.lavin-iot.com",
          label: "lavin-iot.com ↗",
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
      logo: {
        alt: "LavinIoT",
        src: "img/logo-dark.svg",
        href: "https://www.lavin-iot.com",
        width: 32,
        height: 32,
      },
      links: [
        {
          title: "Platform",
          items: [
            { label: "00 Vision", to: "/vision" },
            { label: "01 Product", to: "/product" },
            { label: "02 Core Architecture", to: "/core-architecture" },
            { label: "03 Module Catalog", to: "/module-catalog" },
          ],
        },
        {
          title: "Engineering",
          items: [
            { label: "Engineering Principles", to: "/engineering-principles" },
            { label: "08 ADR", to: "/adr" },
            { label: "06 APIs & SDKs", to: "/apis-sdks" },
            { label: "05 UX & Design System", to: "/ux-design-system" },
          ],
        },
        {
          title: "Governance",
          items: [
            { label: "09 Sprint Journal", to: "/sprint-journal" },
            { label: "10 Release Notes", to: "/release-notes" },
            { label: "07 Deployment", to: "/deployment" },
            { label: "04 Data Model", to: "/data-model" },
          ],
        },
        {
          title: "LavinIoT",
          items: [
            { label: "Marketing site", href: "https://www.lavin-iot.com" },
            { label: "GitHub", href: "https://github.com/Jonassan1990/laviniot-architecture" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LavinIoT. Lavin Book is the official engineering handbook of LavinIoT. Not for external distribution.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "python",
        "bash",
        "yaml",
        "json",
        "typescript",
        "sql",
      ],
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
      id: "lavin-book-v1-brand",
      content:
        "📘 <strong>Lavin Book</strong> — The official engineering handbook of LavinIoT. <a href='https://www.lavin-iot.com' style='color:#34d399;text-decoration:underline;' target='_blank' rel='noopener noreferrer'>lavin-iot.com ↗</a>",
      backgroundColor: "#0b1d3a",
      textColor: "#f1f5f9",
      isCloseable: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
