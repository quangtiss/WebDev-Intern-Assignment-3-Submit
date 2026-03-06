"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from "@/components/ui/sidebar"

export function AppSidebar() {
    return (
        <Sidebar className="bg-linear-to-b from-yellow-400 to-teal-600 text-black">
            <SidebarContent className="bg-linear-to-b from-yellow-400 to-teal-600">

                <SidebarGroup>
                    <SidebarGroupLabel className="text-lg font-bold">
                        Menu
                    </SidebarGroupLabel>

                    <SidebarMenu>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                Dashboard
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton className="font-bold">
                                Search Scores
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                Reports
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                        <SidebarMenuItem>
                            <SidebarMenuButton>
                                Settings
                            </SidebarMenuButton>
                        </SidebarMenuItem>

                    </SidebarMenu>

                </SidebarGroup>

            </SidebarContent>

        </Sidebar>
    )
}