
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
  description?: string;
}

interface SidebarNavProps {
  items: NavItem[];
  className?: string;
  showTooltips?: boolean;
  showLabels?: boolean;
}

export function SidebarNav({ 
  items, 
  className, 
  showTooltips = true,
  showLabels = true 
}: SidebarNavProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const renderNavButton = (item: NavItem) => {
    const navButton = (
      <SidebarMenuSubButton
        asChild
        isActive={isActive(item.href)}
        className={cn(
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background transition-colors",
          item.isDisabled && "cursor-not-allowed opacity-50",
          !showLabels && "justify-center"
        )}
        aria-disabled={item.isDisabled}
      >
        <Link 
          to={item.isDisabled ? "#" : item.href}
          className={cn("flex items-center gap-3", !showLabels && "px-0")}
          aria-label={!showLabels ? item.title : undefined}
        >
          {item.icon}
          {showLabels && <span className="font-medium">{item.title}</span>}
        </Link>
      </SidebarMenuSubButton>
    );

    if (showTooltips && (!showLabels || item.description)) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>
            {navButton}
          </TooltipTrigger>
          <TooltipContent side="right" align="center" className="max-w-[200px]">
            <p className="font-medium">{item.title}</p>
            {item.description && (
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
            )}
          </TooltipContent>
        </Tooltip>
      );
    }

    return navButton;
  };

  return (
    <SidebarMenuSub className={className}>
      {items.map((item) => (
        <SidebarMenuSubItem key={item.href}>
          {renderNavButton(item)}
        </SidebarMenuSubItem>
      ))}
    </SidebarMenuSub>
  );
}
