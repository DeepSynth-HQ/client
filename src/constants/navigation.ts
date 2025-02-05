import { SidebarNavigationMenu } from "@/interfaces/navigation";
import {
  BotIcon,
  ChartCandlestickIcon,
  GiftIcon,
  WalletIcon,
} from "lucide-react";

export const sidebarNavigatiomMenu: SidebarNavigationMenu = [
  {
    path: "/conversation",
    title: "Chat Agent",
    icon: BotIcon,
  },
  {
    path: "/portfolio",
    title: "Porfilio",
    icon: WalletIcon,
    disable: true,
    notifyContent: "Soon",
    notifyPriority: "silent",
  },
  {
    path: "/onchain-analyzing",
    title: "Onchain Analyzing",
    icon: ChartCandlestickIcon,
    disable: true,
    notifyContent: "Soon",
    notifyPriority: "silent",
  },
  {
    path: "/airdrop-hunting",
    title: "Airdrop Hunting",
    icon: GiftIcon,
    disable: true,
    notifyContent: "Soon",
    notifyPriority: "silent",
  },
];
