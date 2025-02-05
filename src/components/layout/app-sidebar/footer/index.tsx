"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useClipboard } from "@/hooks/use-clipboard";
import { useToast } from "@/hooks/use-toast";
import { getInitials } from "@/utils";
import {
  ChevronsUpDownIcon,
  CopyIcon,
  LoaderCircleIcon,
  User2Icon,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function SidebarFooterContent() {
  const { data: session, status } = useSession();
  const { toast } = useToast();
  const { copy } = useClipboard();

  return (
    <SidebarMenu>
      {status === "authenticated" && (
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => {
              if (!session.wallet?.public_key) return;
              copy(session.wallet?.public_key);
              toast({ description: "Wallet is copied to clipboard" });
            }}>
            <CopyIcon />
            <p className="truncate">{session.wallet?.public_key}</p>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )}
      <SidebarMenuItem>
        {status === "authenticated" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="flex h-max space-x-2 p-0">
                <Avatar className="size-full min-w-4 max-w-8">
                  <AvatarImage src={session?.user?.image ?? undefined} />
                  <AvatarFallback>
                    {getInitials(session?.user?.name as string)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="truncate font-bold">{session.user?.name}</p>
                  <p>{session.user?.email}</p>
                </div>
                <ChevronsUpDownIcon className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]">
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                <span className="font-bold text-red-500">Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {status === "unauthenticated" && (
          <SidebarMenuButton onClick={() => signIn()}>
            <User2Icon /> Login
          </SidebarMenuButton>
        )}
        {status === "loading" && (
          <SidebarMenuButton disabled>
            <LoaderCircleIcon className="animate-spin" /> Loading
          </SidebarMenuButton>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
