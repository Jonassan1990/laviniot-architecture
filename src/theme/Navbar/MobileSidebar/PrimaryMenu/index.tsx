import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useNavbarMobileSidebar,
  useNavbarSecondaryMenu,
} from "@docusaurus/theme-common/internal";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";

function useNavbarItems(): NavbarItemConfig[] {
  // ThemeConfig typing is intentionally loose for navbar items
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

/**
 * Mobile drawer primary panel.
 * Lavin Book is a handbook first: show the full docs sidebar immediately,
 * then the remaining navbar links (Principles, ADR, external).
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
      ) : null}

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
