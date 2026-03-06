import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <div className="flex h-screen w-full">

                {/* Sidebar */}
                <AppSidebar />

                {/* Main */}
                <main className="flex-1 bg-gray-100">


                    {/* Header */}
                    <div className="bg-blue-900 text-white text-center py-6 text-xl font-bold relative">
                        <SidebarTrigger className="absolute top-5 left-1" />
                        G-Scores
                    </div>

                    {/* Content */}
                    {children}
                </main>
            </div>
        </SidebarProvider>
    )
}