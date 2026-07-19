import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Lavin Book",
  tagline: "The engineering handbook of LavinIoT.",
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
          editUrl:
            "https://github.com/Jonassan1990/laviniot-architecture/edit/main/",
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
      title: "Lavin Book",
      logo: {
        alt: "LavinIoT",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
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
          to: "/08-adr",
          label: "ADR",
          position: "left",
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
          title: "Platform",
          items: [
            { label: "00 Vision", to: "/00-vision" },
            { label: "01 Product", to: "/01-product" },
            { label: "02 Core Architecture", to: "/02-core-architecture" },
          ],
        },
        {
          title: "Engineering",
          items: [
            { label: "Engineering Principles", to: "/engineering-principles" },
            { label: "08 ADR", to: "/08-adr" },
            { label: "06 APIs & SDKs", to: "/06-apis-sdks" },
          ],
        },
        {
          title: "Governance",
          items: [
            { label: "09 Sprint Journal", to: "/09-sprint-journal" },
            { label: "10 Release Notes", to: "/10-release-notes" },
            { label: "07 Deployment", to: "/07-deployment" },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LavinIoT. Lavin Book — internal engineering handbook.`,
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
      id: "lavin-book-v1",
      content:
        "📘 <strong>Lavin Book</strong> — This is the official engineering handbook of LavinIoT. Not for external distribution.",
      backgroundColor: "#0B6E4F",
      textColor: "#ffffff",
      isCloseable: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
