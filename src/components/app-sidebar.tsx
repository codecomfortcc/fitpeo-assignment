import { 
  LayoutDashboard, 
  Calendar, 
  Phone, 
  Settings,
  ArrowUpDown,
  SquarePlus,
  TrendingUp,
  MessageCircleMore,


} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,

  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const location = useLocation();
  const { toggleSidebar ,state} = useSidebar()
  const generalItems = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "History", 
      url: "/history",
      icon: ArrowUpDown,
    },
    {
      title: "Calendar",
      url: "/calendar", 
      icon: Calendar,
    },
    {
      title: "Appointments",
      url: "/appointments",
      icon: SquarePlus,
    },
    {
      title: "Statistics",
      url: "/statistics",
      icon: TrendingUp,
    },
  ];

  const toolsItems = [
    {
      title: "Chat",
      url: "/chat",
      icon: MessageCircleMore,
    },
    {
      title: "Support",
      url: "/support", 
      icon: Phone,
    },
  ];

  return (
    <Sidebar collapsible="icon"  className="bg-[#f6faff] " >
      <SidebarHeader>
      <SidebarMenuButton
        size="lg"
        variant="default"
        onClick={toggleSidebar}
        className="flex items-center gap-2 mb-4 hover:bg-[#f6faff] "
      >
        <div className="flex items-center justify-center min-w-8 min-h-8 bg-[#20E1DC] rounded-sm text-white text-lg font-bold ">
          <span> H</span>
        </div>
        <h1 className="text-2xl font-bold  text-[#20E1DC]">Health<span className="text-blue-800">care.</span></h1>
      </SidebarMenuButton>
      </SidebarHeader>
      <SidebarSeparator />
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={cn("!ml-10  mb-2 duration-100 ease-out transition-all ",state=== "collapsed" && "!ml-0")}>General</SidebarGroupLabel>
          <SidebarGroupContent className="overflow-hidden">
            <SidebarMenu className={cn("!ml-10  gap-2.5 duration-100 ease-out transition-all ",state=== "collapsed" && "!ml-0")}>
              {generalItems.map((item) => (
                <SidebarMenuItem className="data-[active=true]:text-[#453d8d] text-gray-500  " key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="hover:bg-[#e7f1fe] data-[active=true]:bg-transparent active:bg-[#dfecfe] "
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={cn("!ml-10  mb-2 duration-100 ease-out transition-all ",state=== "collapsed" && "!ml-0")}>Tools</SidebarGroupLabel>
          <SidebarGroupContent className="overflow-hidden">
            <SidebarMenu className={cn("!ml-10  gap-2.5 duration-100 ease-out transition-all ",state=== "collapsed" && "!ml-0")}>
              {toolsItems.map((item) => (
                <SidebarMenuItem key={item.title} className="data-[active=true]:text-[#453d8d] text-gray-500">
                  <SidebarMenuButton 
                    asChild 
                    isActive={location.pathname === item.url}
                    className="hover:bg-[#e7f1fe] data-[active=true]:bg-transparent active:bg-[#dfecfe]"
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>  
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarSeparator />
      
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              asChild 
              isActive={location.pathname === '/settings'}
            >
              <Link to="/settings">
                <Settings />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
