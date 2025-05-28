import { SidebarInset, SidebarProvider, } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MobileNavigation } from "@/components/mobile-navigation";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0 pb-20 md:pb-4">
          <Outlet />
        </div>
      </SidebarInset>
      <MobileNavigation />
    </SidebarProvider>
  );
}
