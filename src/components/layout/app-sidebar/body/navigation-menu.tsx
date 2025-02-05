"use client";

import {
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarNavigatiomMenu } from "@/constants/navigation";
import { SidebarNavigationMenuItem } from "@/interfaces/navigation";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Key } from "react";

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {sidebarNavigatiomMenu.map(
        (sidebarNavigationMenuItem: SidebarNavigationMenuItem, key: Key) => (
          <SidebarMenuItem key={key}>
            <SidebarMenuButton
              isActive={sidebarNavigationMenuItem.path === pathname}
              asChild>
              <Link
                href={sidebarNavigationMenuItem.path}
                aria-disabled={sidebarNavigationMenuItem.disable}>
                <sidebarNavigationMenuItem.icon />
                <span>{sidebarNavigationMenuItem.title}</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuBadge
              className={cn(
                "text-white",
                sidebarNavigationMenuItem.notifyPriority === "urgent" &&
                  "bg-red-400",
                sidebarNavigationMenuItem.notifyPriority === "silent" &&
                  "bg-black/10",
              )}>
              {sidebarNavigationMenuItem.notifyContent}
            </SidebarMenuBadge>
          </SidebarMenuItem>
        ),
      )}
    </SidebarMenu>
  );
}
