import type { FC } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./index.module.css";

type SectionProps = {
  number: string;
  title: string;
  description: string;
  href: string;
};

const sections: SectionProps[] = [
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
    description: "Every discrete platform capability — purpose, interface, dependencies, and isolation rules.",
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
    description: "Architecture Decision Records — every significant design choice with full rationale.",
    href: "/adr",
  },
  {
    number: "09",
    title: "Sprint Journal",
    description: "Engineering records per sprint — what was planned, delivered, deferred, and learned.",
    href: "/sprint-journal",
  },
  {
    number: "10",
    title: "Release Notes",
    description: "What shipped, what changed, and what was fixed — per release, traceable to ADRs and sprints.",
    href: "/release-notes",
  },
];

function SectionCard({ number, title, description, href }: SectionProps) {
  return (
    <Link to={href} className={styles.card}>
      <span className={styles.cardNumber}>{number}</span>
      <div className={styles.cardBody}>
        <Heading as="h3" className={styles.cardTitle}>{title}</Heading>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  );
}

const HomePage: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Lavin Book" description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.hero)}>
        <div className="container">
          <div className={styles.heroBadge}>Internal Engineering Handbook</div>
          <Heading as="h1" className={styles.heroTitle}>
            Lavin Book
          </Heading>
          <p className={styles.heroTagline}>{siteConfig.tagline}</p>
          <div className={styles.heroBanner}>
            📘 This is the official engineering handbook of LavinIoT.
          </div>
          <div className={styles.heroButtons}>
            <Link className={clsx("button button--secondary button--lg", styles.heroBtn)} to="/vision">
              Start with Vision →
            </Link>
            <Link className={clsx("button button--outline button--lg", styles.heroBtn)} to="/engineering-principles">
              Engineering Principles
            </Link>
            <Link className={clsx("button button--outline button--lg", styles.heroBtn)} to="/adr">
              ADR Log
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.sections}>
          <div className="container">
            <div className={styles.sectionsHeader}>
              <Heading as="h2">Handbook sections</Heading>
              <p>
                Lavin Book is organised into 11 numbered sections. Every section serves a specific governance
                function. Engineers read before they build. Architects write before they decide.
              </p>
            </div>
            <div className={styles.grid}>
              {sections.map((s) => (
                <SectionCard key={s.number} {...s} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.rulesSection}>
          <div className="container">
            <div className={styles.rulesInner}>
              <Heading as="h2">The rules of this book</Heading>
              <div className={styles.rulesList}>
                <div className={styles.rule}>
                  <span className={styles.ruleNumber}>01</span>
                  <div>
                    <strong>Architecture before implementation.</strong> No module is built without a documented interface and an accepted ADR.
                  </div>
                </div>
                <div className={styles.rule}>
                  <span className={styles.ruleNumber}>02</span>
                  <div>
                    <strong>Decisions are recorded, not remembered.</strong> If it is not in an ADR or the Sprint Journal, it did not happen.
                  </div>
                </div>
                <div className={styles.rule}>
                  <span className={styles.ruleNumber}>03</span>
                  <div>
                    <strong>This book is maintained with the same discipline as production code.</strong> Outdated documentation is treated as a defect.
                  </div>
                </div>
                <div className={styles.rule}>
                  <span className={styles.ruleNumber}>04</span>
                  <div>
                    <strong>No business logic lives here.</strong> This book governs the platform — it does not implement it.
                  </div>
                </div>
                <div className={styles.rule}>
                  <span className={styles.ruleNumber}>05</span>
                  <div>
                    <strong>ADRs are immutable after acceptance.</strong> Reversals create a new ADR that supersedes the original.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
