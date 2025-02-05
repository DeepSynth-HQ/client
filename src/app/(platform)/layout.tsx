import AppSidebar from "@/components/layout/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ConversationProvider } from "@/providers/conversation-provider";
import SessionProvider from "@/providers/session-provider";
import { ReactNode } from "react";

export default function PlatformLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <SessionProvider>
      <ConversationProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">{children}</main>
        </SidebarProvider>
      </ConversationProvider>
    </SessionProvider>
  );
}
