
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem
} from "@/components/ui/sidebar";

export interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  isDisabled?: boolean;
}

interface SidebarNavProps {
  items: NavItem[];
  className?: string;
}

export function SidebarNav({ items, className }: SidebarNavProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <SidebarMenuSub className={className}>
      {items.map((item) => (
        <SidebarMenuSubItem key={item.href}>
          <SidebarMenuSubButton
            asChild
            isActive={isActive(item.href)}
            className={cn(
              item.isDisabled && "cursor-not-allowed opacity-50"
            )}
          >
            <Link to={item.isDisabled ? "#" : item.href}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </SidebarMenuSubButton>
        </SidebarMenuSubItem>
      ))}
    </SidebarMenuSub>
  );
}
