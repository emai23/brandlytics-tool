
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BarChart3, LayoutDashboard, User, FileText, LogIn, LogOut, Menu, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
    },
    {
      label: "Projects",
      href: "/create-project",
      icon: <Package className="h-4 w-4" />,
    },
    {
      label: "Account",
      href: "/account",
      icon: <User className="h-4 w-4" />,
    }
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };
  
  const handleLogin = () => {
    navigate("/login");
  };
  
  // Mobile menu
  const MobileMenu = () => (
    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] px-0">
        <div className="flex flex-col h-full">
          <div className="px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium">Market Research</span>
            </div>
          </div>
          <div className="flex-1 py-4">
            <nav className="space-y-1 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground font-medium"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <div className="mr-3">{item.icon}</div>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="px-4 py-3 border-t">
            {isLoggedIn ? (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full flex items-center gap-1"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </Button>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full flex items-center gap-1"
                onClick={handleLogin}
              >
                <LogIn className="h-4 w-4 mr-1" />
                Login
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  // Desktop sidebar using shadcn/ui Sidebar
  return (
    <>
      {/* Mobile menu toggle */}
      <div className="md:hidden fixed top-2 left-2 z-50">
        <MobileMenu />
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex h-screen">
        <SidebarProvider defaultOpen={true}>
          <Sidebar>
            <SidebarRail />
            <SidebarHeader className="border-b">
              <div className="flex items-center gap-2 px-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span className="text-lg font-medium">Market Research</span>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive(item.href)}
                            tooltip={item.label}
                          >
                            <Link to={item.href}>
                              {item.icon}
                              <span>{item.label}</span>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.label}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="border-t">
              <div className="p-2">
                {isLoggedIn ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center gap-1"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    <span>Logout</span>
                  </Button>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center gap-1"
                    onClick={handleLogin}
                  >
                    <LogIn className="h-4 w-4 mr-1" />
                    <span>Login</span>
                  </Button>
                )}
              </div>
              <SidebarTrigger className="ml-auto mr-2 mt-2" />
            </SidebarFooter>
          </Sidebar>
        </SidebarProvider>
      </div>
    </>
  );
};
