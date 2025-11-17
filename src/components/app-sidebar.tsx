"use client"

import * as React from "react"
import {
  Bell,
  Database,
  Lock,
  LogOut,
  Settings,
  Users,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Resources",
      url: "/dashboard/resources",
      icon: Database,
      isActive: false,
    },
    {
      title: "Users & Permissions",
      url: "/dashboard/users",
      icon: Users,
      isActive: true,
    },
    {
      title: "Notifications",
      url: "/dashboard/notifications",
      icon: Bell,
      isActive: false,
    },
    {
      title: "Remote Access",
      url: "/dashboard/remote-access",
      icon: Lock,
      isActive: false,
    },
  ],
  navSecondary: [
    {
      title: "Logout",
      url: "/sign-in",
      icon: LogOut,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Settings className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">System Admin</span>
                  <span className="truncate text-xs">Management</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-2 text-xs text-gray-400">
          User ID: 13798222148119564480
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
