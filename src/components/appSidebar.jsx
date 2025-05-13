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
import { useLogoutUser } from "@/hooks/useLogoutUser"


// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard/swipe",
    icon: Home,
  },
  {
    title: "Liked",
    url: "/dashboard/swipe/liked",
    icon: Heart,
  },
  {
    title: "Collaboraters",
    url: "/dashboard/collaborate",
    icon: BookUser,
  },
  {
    title: "Logout",
    url: "/dashboard",
    icon: LogOut,
  },
]



export function AppSidebar() {

  const { mutate } = useLogoutUser();

  const handleLogout = async (e) => {
    e.preventDefault();
    mutate();
  } 


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
                    <a href={item.url} onClick={item.title === "Logout" ? handleLogout : null }>
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
