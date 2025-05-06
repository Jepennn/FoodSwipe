import { Home, Inbox, Settings, Heart, LogOut,  BookUser} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { UserAvatar } from "@/components/userAvatar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Liked",
    url: "/liked",
    icon: Heart,
  },
  {
    title: "Collaboraters",
    url: "/collaboraters",
    icon: BookUser,
  },
  {
    title: "Logout",
    url: "/logout",
    icon: LogOut,
  },
]

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
        <SidebarHeader className="h-14 border-b border-sidebar-border">
        <UserAvatar />
        </SidebarHeader>
         <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.title === "Home"}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
