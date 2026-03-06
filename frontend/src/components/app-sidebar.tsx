// import {
//     Sidebar,
//     SidebarContent,
//     SidebarGroup,
//     SidebarGroupLabel,
//     SidebarMenu,
//     SidebarMenuItem,
//     SidebarMenuButton
// } from "@/components/ui/sidebar"

// export function AppSidebar() {
//     return (
//         <Sidebar className="bg-linear-to-b from-yellow-400 to-teal-600 text-black">
//             <SidebarContent className="bg-linear-to-b from-yellow-400 to-teal-600">

//                 <SidebarGroup>
//                     <SidebarGroupLabel className="text-lg font-bold">
//                         Menu
//                     </SidebarGroupLabel>

//                     <SidebarMenu>

//                         <SidebarMenuItem>
//                             <SidebarMenuButton>
//                                 Dashboard
//                             </SidebarMenuButton>
//                         </SidebarMenuItem>

//                         <SidebarMenuItem>
//                             <SidebarMenuButton>
//                                 Search Scores
//                             </SidebarMenuButton>
//                         </SidebarMenuItem>

//                         <SidebarMenuItem>
//                             <SidebarMenuButton>
//                                 Reports
//                             </SidebarMenuButton>
//                         </SidebarMenuItem>

//                         <SidebarMenuItem>
//                             <SidebarMenuButton>
//                                 Settings
//                             </SidebarMenuButton>
//                         </SidebarMenuItem>

//                     </SidebarMenu>

//                 </SidebarGroup>

//             </SidebarContent>

//         </Sidebar>
//     )
// }

import { NavLink } from "react-router-dom"

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

    const menuItems = [
        { name: "Dashboard", path: "/" },
        { name: "Search Scores", path: "/search" },
        { name: "Reports", path: "/reports" },
    ]

    return (
        <Sidebar className="bg-gradient-to-b from-yellow-400 to-teal-600 text-black">

            <SidebarContent className="bg-gradient-to-b from-yellow-400 to-teal-600">

                <SidebarGroup>

                    <SidebarGroupLabel className="text-lg font-bold">
                        Menu
                    </SidebarGroupLabel>

                    <SidebarMenu>

                        {menuItems.map((item) => (

                            <SidebarMenuItem key={item.path}>

                                <NavLink to={item.path}>

                                    {({ isActive }) => (

                                        <SidebarMenuButton
                                            className={`
                        w-full text-left rounded-md px-3 py-2 transition
                        hover:bg-white/30
                        ${isActive ? "bg-white/50 font-semibold shadow" : ""}
                      `}
                                        >
                                            {item.name}
                                        </SidebarMenuButton>

                                    )}

                                </NavLink>

                            </SidebarMenuItem>

                        ))}

                    </SidebarMenu>

                </SidebarGroup>

            </SidebarContent>

        </Sidebar>
    )
}