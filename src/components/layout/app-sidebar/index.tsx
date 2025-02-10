import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from "../../ui/sidebar";
import HistoryList from "./body/history-list";
import NavigationMenu from "./body/navigation-menu";
import SidebarFooterContent from "./footer";
import SidebarHeaderContent from "./header";

export default async function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarHeaderContent />
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent className="overflow-hidden">
        {/* Explore */}
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <NavigationMenu />
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        {/* Conversations */}
        <SidebarGroup className="overflow-y-hidden">
          <SidebarGroupLabel>Conversation History</SidebarGroupLabel>
          <SidebarGroupContent className="h-full overflow-y-auto">
            <HistoryList />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />

      <SidebarFooter>
        <SidebarFooterContent />
      </SidebarFooter>
    </Sidebar>
  );
}
