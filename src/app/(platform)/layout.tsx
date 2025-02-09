import AppSidebar from "@/components/layout/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getAuthToken } from "@/libs/session";
import { ConversationProvider } from "@/providers/conversation-provider";
import { SessionProvider } from "@/providers/session-provider";
import { ReactNode } from "react";

export default async function PlatformLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const authToken = await getAuthToken();

  return (
    <SessionProvider authToken={authToken}>
      <ConversationProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-full">{children}</main>
        </SidebarProvider>
      </ConversationProvider>
    </SessionProvider>
  );
}
