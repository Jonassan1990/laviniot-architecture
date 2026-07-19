import type { FC } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./index.module.css";

type PillarProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

const pillars: PillarProps[] = [
  {
    icon: "🧭",
    title: "Vision",
    description:
      "The long-term direction for LavinIoT — what we are building, who we serve, and the principles that govern every decision.",
    href: "/vision",
  },
  {
    icon: "🏗️",
    title: "Architecture",
    description:
      "Core, Modules, Providers, Data Model, and Security. The structural blueprint of the entire platform.",
    href: "/architecture/overview",
  },
  {
    icon: "📐",
    title: "ADR",
    description:
      "Architecture Decision Records. Every significant design choice — the context, the decision, the consequences, and the alternatives considered.",
    href: "/adr",
  },
  {
    icon: "🔌",
    title: "API",
    description:
      "REST and MQTT API contracts. Authentication flows, resource schemas, versioning strategy, and integration patterns.",
    href: "/api/overview",
  },
  {
    icon: "🚀",
    title: "Deployment",
    description:
      "Cloud, Edge, and Hybrid deployment models. Infrastructure topology, CI/CD pipelines, and operational runbooks.",
    href: "/deployment/overview",
  },
  {
    icon: "📋",
    title: "Roadmap",
    description:
      "What is available, what is planned, and what is on the long-term horizon. Phased delivery milestones.",
    href: "/roadmap",
  },
];

function Pillar({ icon, title, description, href }: PillarProps) {
  return (
    <div className={clsx("col col--4", styles.pillar)}>
      <Link to={href} className={styles.pillarCard}>
        <div className={styles.pillarIcon}>{icon}</div>
        <Heading as="h3" className={styles.pillarTitle}>
          {title}
        </Heading>
        <p className={styles.pillarDescription}>{description}</p>
      </Link>
    </div>
  );
}

const HomePage: FC = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title="Architecture Portal" description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            LavinIoT Architecture Portal
          </Heading>
          <p className={styles.heroSubtitle}>
            Single source of truth for platform design, architectural decisions, and engineering governance.
            <br />
            This portal governs the LavinIoT platform — it is not customer-facing documentation.
          </p>
          <div className={styles.heroButtons}>
            <Link className={clsx("button button--secondary button--lg", styles.heroButton)} to="/vision">
              Start with Vision →
            </Link>
            <Link className={clsx("button button--outline button--lg", styles.heroButton)} to="/adr">
              Architecture Decisions
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.pillarsSection}>
          <div className="container">
            <div className={styles.pillarsHeading}>
              <Heading as="h2">What this portal contains</Heading>
              <p>
                Every structural decision, interface contract, and deployment pattern for the LavinIoT platform
                lives here. Engineers, architects, and technical leads use this portal as the authoritative
                reference before writing code.
              </p>
            </div>
            <div className={clsx("row", styles.pillarsRow)}>
              {pillars.map((p) => (
                <Pillar key={p.title} {...p} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.principlesSection}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <Heading as="h2">Core governing principles</Heading>
                <ul className={styles.principlesList}>
                  <li>
                    <strong>Architecture before implementation.</strong> No component is built without a
                    documented interface and an accepted ADR.
                  </li>
                  <li>
                    <strong>Core knows only interfaces.</strong> The platform Core never depends on a specific
                    provider implementation. Providers are replaceable without rewriting business logic.
                  </li>
                  <li>
                    <strong>Modularity is non-negotiable.</strong> Every capability is a discrete module with
                    defined inputs, outputs, and boundaries.
                  </li>
                  <li>
                    <strong>Decisions are recorded, not remembered.</strong> If it is not in an ADR, it did not
                    happen. Rationale must be preserved with every significant choice.
                  </li>
                  <li>
                    <strong>Security is structural, not additive.</strong> Authentication, authorization, and data
                    isolation are designed in — not bolted on.
                  </li>
                  <li>
                    <strong>Industrial reliability over developer convenience.</strong> The platform operates in
                    factories, fields, and infrastructure where failure has real cost.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
