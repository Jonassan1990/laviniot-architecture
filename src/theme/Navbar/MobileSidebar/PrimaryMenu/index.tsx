import React from "react";
import Link from "@docusaurus/Link";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useNavbarMobileSidebar,
  useNavbarSecondaryMenu,
} from "@docusaurus/theme-common/internal";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";

function useNavbarItems(): NavbarItemConfig[] {
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

const handbookSections = [
  { label: "Lavin Book intro", to: "/intro" },
  { label: "Engineering Principles", to: "/engineering-principles" },
  { label: "00 Vision", to: "/vision" },
  { label: "01 Product", to: "/product" },
  { label: "02 Core Architecture", to: "/core-architecture" },
  { label: "03 Module Catalog", to: "/module-catalog" },
  { label: "04 Data Model", to: "/data-model" },
  { label: "05 UX & Design System", to: "/ux-design-system" },
  { label: "06 APIs & SDKs", to: "/apis-sdks" },
  { label: "07 Deployment", to: "/deployment" },
  { label: "08 ADR", to: "/adr" },
  { label: "09 Sprint Journal", to: "/sprint-journal" },
  { label: "10 Release Notes", to: "/release-notes" },
];

/**
 * Mobile drawer primary panel.
 * Always show the handbook section list — including on the homepage,
 * where Docusaurus does not provide secondaryMenu.content.
 */
export default function NavbarMobileSidebarPrimaryMenu(): React.ReactElement {
  const mobileSidebar = useNavbarMobileSidebar();
  const secondaryMenu = useNavbarSecondaryMenu();
  const items = useNavbarItems();
  const links = items.filter((item) => item.type !== "docSidebar");

  return (
    <>
      {secondaryMenu.content ? (
        <div className="mobileHandbookMenu">{secondaryMenu.content}</div>
      ) : (
        <nav className="mobileHandbookFallback" aria-label="Handbook sections">
          {handbookSections.map((section) => (
            <Link
              key={section.to}
              to={section.to}
              onClick={() => mobileSidebar.toggle()}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      )}

      <ul className="menu__list">
        {links.map((item, i) => (
          <NavbarItem
            {...item}
            mobile
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
        ))}
      </ul>
    </>
  );
}
