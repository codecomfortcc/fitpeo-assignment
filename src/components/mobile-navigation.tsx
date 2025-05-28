import { cn } from "@/lib/utils";
import * as Icons from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function MobileNavigation({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const location = useLocation();

  return (
    <div
      className={cn(
        "md:hidden fixed bottom-0 left-0 right-0 bg-background border-t py-2 px-4 z-50",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <MobileNavItem 
          href="/dashboard" 
          icon="LayoutDashboard" 
          label="Dashboard" 
          isActive={location.pathname === '/dashboard'}
        />
        <MobileNavItem 
          href="/history" 
          icon="History" 
          label="History" 
          isActive={location.pathname === '/history'}
        />
        <MobileNavItem 
          href="/appointments" 
          icon="CalendarClock" 
          label="Appointments" 
          isActive={location.pathname === '/appointments'}
        />
        <MobileNavItem 
          href="/chat" 
          icon="MessagesSquare" 
          label="Chat" 
          isActive={location.pathname === '/chat'}
        />
        <MobileNavItem 
          href="/settings" 
          icon="Settings" 
          label="Settings" 
          isActive={location.pathname === '/settings'}
        />
      </div>
    </div>
  );
}

interface MobileNavItemProps {
  href: string;
  icon: string;
  label: string;
  isActive?: boolean;
}

function MobileNavItem({ href, icon, label, isActive }: MobileNavItemProps) {
  const Icon = Icons[icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  
  return (
    <Link
      to={href}
      className={cn(
        "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-md transition-colors",
        isActive ? "text-[#20E1DC]" : "text-muted-foreground hover:text-foreground"
      )}
    >
      {Icon && <Icon className="h-5 w-5" />}
      <span className="text-xs">{label}</span>
    </Link>
  );
}
