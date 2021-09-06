import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { SubMenuItemsType } from "../../components/SubMenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: "Trade",
    href: "/",
    icon: "TradeIcon",
    isActive: true,
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
        isActive: true,
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Earn",
    href: "/",
    icon: "EarnIcon",
    items: [
      {
        label: "Earn",
        href: "/",
      },
      {
        label: "Yield Farms",
        href: "/",
      },
      {
        label: "Syrup pools",
        href: "/",
      },
    ],
  },
  {
    label: "Win",
    href: "/",
    icon: "WinIcon",
    items: [
      {
        label: "Win",
        href: "/",
      },
      {
        label: "Predictions",
        href: "/",
      },
      {
        label: "Lottery",
        href: "/",
      },
    ],
  },
  {
    label: "...",
    href: "/",
    icon: "MoreIcon",
    items: [
      {
        label: "Info & Analytics",
        href: "/",
      },
      {
        label: "IFO Token Sales",
        href: "/",
        status: status.SOON,
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: "NFT Collectibles",
        href: "/",
      },
      {
        label: "Team Leaderboard",
        href: "/",
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: "Blog",
        href: "/",
      },
      {
        label: "Docs & Guides",
        href: "/",
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
];

export const subLinks: SubMenuItemsType[] = [
  {
    label: "Exchange",
    href: "/",
    isActive: true,
  },
  {
    label: "Liquidity",
    href: "/",
  },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://pancakeswap.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 56;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
