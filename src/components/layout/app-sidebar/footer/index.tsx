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
import { SERVER_URL } from "@/configs/env.config";
import { useClipboard } from "@/hooks/use-clipboard";
import { useSession } from "@/hooks/use-session";
import { useToast } from "@/hooks/use-toast";
import { getInitials } from "@/utils";
import {
  ChevronsUpDownIcon,
  CopyIcon,
  LoaderCircleIcon,
  User2Icon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SidebarFooterContent() {
  const { session, status } = useSession();
  const { toast } = useToast();
  const { copy } = useClipboard();
  const { push } = useRouter();

  return (
    <SidebarMenu>
      {status === "authenticated" && (
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => {
              if (!session?.user.address) return;
              copy(session.user.address);
              toast({ description: "Wallet is copied to clipboard" });
            }}>
            <p className="min-w-0 flex-grow truncate">
              {session?.user.address}
            </p>
            <CopyIcon />
          </SidebarMenuButton>
        </SidebarMenuItem>
      )}
      <SidebarMenuItem>
        {status === "authenticated" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="flex h-max space-x-2 p-0">
                <Avatar className="aspect-square size-full max-h-8 min-h-4 min-w-4 max-w-8">
                  <AvatarImage src={session?.user?.avatar ?? undefined} />
                  <AvatarFallback>
                    {getInitials(session?.user?.name as string)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-grow flex-col">
                  <p className="truncate font-bold">{session?.user.username}</p>
                  <p>{session?.user.username}</p>
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
              <DropdownMenuItem onClick={() => push("logout")}>
                <span className="font-bold text-red-500">Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
        {status === "unauthenticated" && (
          <Link href={`${SERVER_URL}/auth/x`}>
            <SidebarMenuButton>
              <User2Icon /> Login
            </SidebarMenuButton>
          </Link>
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
