# Lavin Design System

The single source of truth for the LavinIoT visual identity.

## Purpose

This `/brand` directory defines the design system shared across every LavinIoT application:

| Application | URL |
|---|---|
| Marketing website | `www.lavin-iot.com` |
| Engineering handbook | `book.lavin-iot.com` |
| Platform dashboard | `app.lavin-iot.com` |
| Customer portal | `portal.lavin-iot.com` |
| Admin console | `admin.lavin-iot.com` |

All applications share one visual language. No design token is duplicated.

---

## Structure

```
/brand
  tokens.css      — All CSS custom properties (the canonical token source)
  README.md       — This file
```

---

## Colors

### Light mode

| Token | Value | Usage |
|---|---|---|
| `--lavin-accent` | `#00a86b` | Primary CTA, active states, links |
| `--lavin-accent-light` | `#34d399` | Hover states, gradients |
| `--lavin-primary` | `#0b1d3a` | Navy — headings, logo shell |
| `--lavin-primary-light` | `#1e3a5f` | Secondary navy |
| `--lavin-bg` | `#fafbfd` | Page background |
| `--lavin-surface` | `#f1f5f9` | Card backgrounds, alt sections |
| `--lavin-border` | `#e2e8f0` | Borders, dividers |
| `--lavin-muted` | `#64748b` | Secondary text |
| `--lavin-fg` | `#0b1d3a` | Primary text |

### Dark mode

| Token | Value | Usage |
|---|---|---|
| `--lavin-accent` | `#34d399` | Primary CTA in dark mode |
| `--lavin-accent-light` | `#6ee7b7` | Hover states |
| `--lavin-bg` | `#060b14` | Dark page background |
| `--lavin-surface` | `#0f172a` | Dark card backgrounds |
| `--lavin-border` | `#1e293b` | Dark borders |

---

## Typography

| Role | Font family | Weights |
|---|---|---|
| Body | Inter | 400, 500, 600 |
| Display / Headings | Plus Jakarta Sans | 500, 600, 700, 800 |
| Code | JetBrains Mono / system mono | 400, 500 |

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `--lavin-radius-sm` | `8px` | Badges, chips |
| `--lavin-radius-md` | `12px` | Buttons, inputs |
| `--lavin-radius-lg` | `16px` | Cards |
| `--lavin-radius-xl` | `20px` | Large cards |
| `--lavin-radius-full` | `9999px` | Pills |

---

## Logo

The LavinIoT mark is a 40×40 SVG depicting:
- **Rounded gateway shell** — edge platform
- **Peripheral nodes** — distributed sensors and devices
- **Link lines** — secure device-to-cloud data paths
- **Signal arcs** — wireless IoT connectivity
- **Central hub** — monitoring and analytics core

Wordmark: `Lavin` in navy weight-600 + `IoT` in accent green weight-700 with wider tracking.

### Files

| File | Usage |
|---|---|
| `static/img/logo.svg` | Navbar (light mode) |
| `static/img/logo-dark.svg` | Navbar (dark mode) |

---

## Usage

In Docusaurus (`custom.css`), import the token values as Docusaurus IFM variables:

```css
:root {
  --ifm-color-primary: var(--lavin-accent); /* #00a86b */
}
```

In Next.js (`globals.css`), use the tokens directly:

```css
:root {
  --accent: var(--lavin-accent);
}
```

---

## Rules

1. **Never hardcode brand colors in application stylesheets.** Always reference a token.
2. **Never use Docusaurus default blue.** Override every IFM primary color variable.
3. **Never use Plus Jakarta Sans at weight 400.** Display font is display-only.
4. **All new applications must import `brand/tokens.css` or replicate its variables.**
5. **Token changes require a design review.** Open an ADR if a change affects all applications.
