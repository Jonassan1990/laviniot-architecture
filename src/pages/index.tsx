import type { FC } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

type SectionItem = {
  number: string;
  title: string;
  description: string;
  href: string;
};

const sections: SectionItem[] = [
  {
    number: "00",
    title: "Vision",
    description: "What LavinIoT is building, who it serves, and the strategic constraints that govern every decision.",
    href: "/vision",
  },
  {
    number: "01",
    title: "Product",
    description: "Product philosophy, user personas, and the phased roadmap from foundation to scale.",
    href: "/product",
  },
  {
    number: "02",
    title: "Core Architecture",
    description: "Platform topology, Core interface design, provider contracts, security model, and design invariants.",
    href: "/core-architecture",
  },
  {
    number: "03",
    title: "Module Catalog",
    description: "Every discrete platform capability, purpose, interface, dependencies, and isolation rules.",
    href: "/module-catalog",
  },
  {
    number: "04",
    title: "Data Model",
    description: "Entity relationships, telemetry schema, multi-tenancy enforcement, and data retention policy.",
    href: "/data-model",
  },
  {
    number: "05",
    title: "UX & Design System",
    description: "Interface philosophy, design tokens, component catalogue, and dashboard specifications.",
    href: "/ux-design-system",
  },
  {
    number: "06",
    title: "APIs & SDKs",
    description: "REST and MQTT contracts, authentication flows, versioning strategy, and SDK roadmap.",
    href: "/apis-sdks",
  },
  {
    number: "07",
    title: "Deployment",
    description: "Cloud, Edge, and Hybrid deployment models. CI/CD pipelines and operational runbooks.",
    href: "/deployment",
  },
  {
    number: "08",
    title: "ADR",
    description: "Architecture Decision Records, every significant design choice with full rationale.",
    href: "/adr",
  },
  {
    number: "09",
    title: "Sprint Journal",
    description: "Engineering records per sprint, what was planned, delivered, deferred, and learned.",
    href: "/sprint-journal",
  },
  {
    number: "10",
    title: "Release Notes",
    description: "What shipped, what changed, and what was fixed, per release, traceable to ADRs and sprints.",
    href: "/release-notes",
  },
];

const rules = [
  {
    number: "01",
    title: "Architecture before implementation.",
    body: "No module is built without a documented interface and an accepted ADR.",
  },
  {
    number: "02",
    title: "Decisions are recorded, not remembered.",
    body: "If it is not in an ADR or the Sprint Journal, it did not happen.",
  },
  {
    number: "03",
    title: "This book is maintained with the same discipline as production code.",
    body: "Outdated documentation is treated as a defect.",
  },
  {
    number: "04",
    title: "No business logic lives here.",
    body: "This book governs the platform, it does not implement it.",
  },
  {
    number: "05",
    title: "ADRs are immutable after acceptance.",
    body: "Reversals create a new ADR that supersedes the original.",
  },
];

function SectionCard({ number, title, description, href }: SectionItem) {
  return (
    <Link to={href} className={styles.card}>
      <span className={styles.cardNumber}>{number}</span>
      <div className={styles.cardBody}>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <span className={styles.cardArrow} aria-hidden="true">→</span>
    </Link>
  );
}

const HomePage: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Lavin Book · Engineering Handbook" description={siteConfig.tagline}>

      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroMesh} aria-hidden="true" />
        <div className={styles.glowOrb1} aria-hidden="true" />
        <div className={styles.glowOrb2} aria-hidden="true" />

        <div className={styles.heroInner}>
          {/* Canonical L monogram, same asset as www.lavin-iot.com */}
          <div className={styles.brandMark}>
            <img
              src="/img/logo.svg"
              alt="LavinIoT"
              width={88}
              height={88}
              className={`${styles.brandMarkImg} ${styles.brandMarkLight}`}
            />
            <img
              src="/img/logo-dark.svg"
              alt="LavinIoT"
              width={88}
              height={88}
              className={`${styles.brandMarkImg} ${styles.brandMarkDark}`}
            />
          </div>

          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Internal Engineering Handbook
          </div>

          <Heading as="h1" className={styles.heroTitle}>
            Lavin<span className={styles.heroAccent}>Book</span>
          </Heading>

          <p className={styles.heroTagline}>{siteConfig.tagline}</p>

          <div className={styles.heroBanner}>
            The official engineering handbook of LavinIoT. Not for external distribution.
          </div>

          {/* CTAs */}
          <div className={styles.heroActions}>
            <Link to="/vision" className={styles.btnPrimary}>
              Start with Vision
              <span aria-hidden="true"> →</span>
            </Link>
            <Link to="/engineering-principles" className={styles.btnSecondary}>
              Engineering Principles
            </Link>
            <Link to="/adr" className={styles.btnGhost}>
              ADR Log
            </Link>
          </div>

          {/* Quick stats */}
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>11</span>
              <span className={styles.heroStatLabel}>Sections</span>
            </div>
            <div className={styles.heroStatDivider} aria-hidden="true" />
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>2</span>
              <span className={styles.heroStatLabel}>ADRs accepted</span>
            </div>
            <div className={styles.heroStatDivider} aria-hidden="true" />
            <div className={styles.heroStat}>
              <span className={styles.heroStatValue}>9</span>
              <span className={styles.heroStatLabel}>Engineering principles</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ── Sections grid ── */}
        <section className={styles.sections}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionLabel}>Handbook</span>
              <Heading as="h2" className={styles.sectionTitle}>
                Eleven sections. One source of truth.
              </Heading>
              <p className={styles.sectionSubtitle}>
                Lavin Book is organised into 11 numbered sections. Every section serves a specific
                governance function. Engineers read before they build. Architects write before they decide.
              </p>
            </div>
            <div className={styles.grid}>
              {sections.map((s) => (
                <SectionCard key={s.number} {...s} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Quick links ── */}
        <section className={styles.quickLinks}>
          <div className={styles.container}>
            <div className={styles.quickLinksGrid}>
              <Link to="/engineering-principles" className={styles.quickLink}>
                <span className={styles.quickLinkIcon}>⚙</span>
                <div>
                  <strong>Engineering Principles</strong>
                  <span>The values behind every decision</span>
                </div>
              </Link>
              <Link to="/adr" className={styles.quickLink}>
                <span className={styles.quickLinkIcon}>📋</span>
                <div>
                  <strong>ADR Log</strong>
                  <span>Architecture decision records</span>
                </div>
              </Link>
              <Link to="/core-architecture" className={styles.quickLink}>
                <span className={styles.quickLinkIcon}>🏗</span>
                <div>
                  <strong>Core Architecture</strong>
                  <span>Platform topology and invariants</span>
                </div>
              </Link>
              <a href="https://www.lavin-iot.com" className={styles.quickLink} target="_blank" rel="noopener noreferrer">
                <span className={styles.quickLinkIcon}>🌐</span>
                <div>
                  <strong>lavin-iot.com</strong>
                  <span>Marketing website</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── Rules ── */}
        <section className={styles.rulesSection}>
          <div className={styles.container}>
            <div className={styles.rulesInner}>
              <span className={styles.sectionLabel}>Governance</span>
              <Heading as="h2" className={styles.rulesTitle}>
                The rules of this book
              </Heading>
              <div className={styles.rulesList}>
                {rules.map((rule) => (
                  <div key={rule.number} className={styles.rule}>
                    <span className={styles.ruleNumber}>{rule.number}</span>
                    <div className={styles.ruleBody}>
                      <strong className={styles.ruleTitle}>{rule.title}</strong>
                      <p className={styles.ruleText}>{rule.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
