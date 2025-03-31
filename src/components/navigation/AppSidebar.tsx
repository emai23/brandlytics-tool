
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { 
  BarChart3, LayoutDashboard, User, FileText, LogIn, LogOut, 
  Menu, Package, ChevronRight, Star, Clock, Search,
  PanelLeftClose, PanelLeft, Settings, Home, Briefcase
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Switch } from "@/components/ui/switch";
import { HotkeysProvider, useHotkeys } from "react-hotkeys-hook";
import { Badge } from "@/components/ui/badge";

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
  useSidebar
} from "@/components/ui/sidebar";

// Mock data for recent/favorite projects
const recentProjects = [
  { id: "1", name: "Brand Positioning", isFavorite: true },
  { id: "2", name: "Market Expansion", isFavorite: true },
  { id: "3", name: "Customer Journey", isFavorite: false },
];

// Define the keyboard shortcuts
const KEYBOARD_SHORTCUTS = {
  TOGGLE_SIDEBAR: { key: "b", meta: true, description: "Toggle sidebar" },
  SEARCH: { key: "/", description: "Focus search" },
  NEW_PROJECT: { key: "n", meta: true, description: "New project" },
  GO_HOME: { key: "h", meta: true, description: "Go to home" },
  GO_DASHBOARD: { key: "d", meta: true, description: "Go to dashboard" },
  GO_PROJECTS: { key: "p", meta: true, description: "Go to projects" },
  TOGGLE_THEME: { key: "t", meta: true, description: "Toggle theme" },
};

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  badge?: string;
  keyboard?: string;
}

export const AppSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume logged in for demo
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showShortcutsModal, setShowShortcutsModal] = useState(false);
  const [showFavorites, setShowFavorites] = useState(true);
  const [showRecent, setShowRecent] = useState(true);
  
  // Load the sidebar state from localStorage
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const savedState = localStorage.getItem("sidebar-state");
    return savedState ? savedState === "open" : true;
  });

  // Save sidebar state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("sidebar-state", sidebarOpen ? "open" : "closed");
  }, [sidebarOpen]);

  // Set up keyboard shortcuts
  useHotkeys(KEYBOARD_SHORTCUTS.NEW_PROJECT.key, (e) => {
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault();
      navigate('/create-project');
    }
  }, [navigate]);

  useHotkeys(KEYBOARD_SHORTCUTS.GO_HOME.key, (e) => {
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault();
      navigate('/');
    }
  }, [navigate]);

  useHotkeys(KEYBOARD_SHORTCUTS.GO_DASHBOARD.key, (e) => {
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault();
      navigate('/dashboard');
    }
  }, [navigate]);

  useHotkeys(KEYBOARD_SHORTCUTS.GO_PROJECTS.key, (e) => {
    if (e.metaKey || e.ctrlKey) {
      e.preventDefault();
      navigate('/projects');
    }
  }, [navigate]);

  useHotkeys('?', () => {
    setShowShortcutsModal(true);
  });

  const mainNavItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-4 w-4" />,
      keyboard: "⌘H"
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />,
      keyboard: "⌘D"
    },
    {
      label: "Projects",
      href: "/projects",
      icon: <Briefcase className="h-4 w-4" />,
      badge: "New",
      keyboard: "⌘P"
    },
    {
      label: "Create Project",
      href: "/create-project",
      icon: <Package className="h-4 w-4" />,
      keyboard: "⌘N"
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  // Mobile menu
  const MobileMenu = () => (
    <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden fixed top-2 left-2 z-50">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] px-0">
        <div className="flex flex-col h-full">
          <div className="px-4 py-3 border-b">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium">Market Research</span>
            </div>
          </div>
          <div className="flex-1 py-4 overflow-auto">
            <nav className="space-y-6 px-2">
              <div className="space-y-1">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors",
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground font-medium"
                        : "hover:bg-muted text-muted-foreground"
                    )}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">{item.icon}</div>
                      {item.label}
                    </div>
                    {item.badge && (
                      <Badge variant="outline" className="text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </Link>
                ))}
              </div>
              
              <div>
                <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Favorites
                </div>
                <div className="space-y-1">
                  {recentProjects
                    .filter(project => project.isFavorite)
                    .map((project) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}/dashboard`}
                        className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted text-muted-foreground"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <Star className="h-4 w-4 mr-3 fill-yellow-400 text-yellow-400" />
                        {project.name}
                      </Link>
                    ))}
                </div>
              </div>
              
              <div>
                <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Recent
                </div>
                <div className="space-y-1">
                  {recentProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}/dashboard`}
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-muted text-muted-foreground"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <Clock className="h-4 w-4 mr-3" />
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Appearance
                </div>
                <div className="px-3 py-2">
                  <ThemeToggle variant="ghost" className="w-full justify-start" />
                </div>
              </div>
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
  
  // Desktop sidebar - uses the enhanced sidebar with different states
  return (
    <>
      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <MobileMenu />
      </div>
      
      {/* Desktop sidebar */}
      <div className="hidden md:flex h-screen">
        <SidebarProvider defaultOpen={sidebarOpen}>
          <Sidebar>
            <SidebarRail />
            <SidebarHeader className="border-b">
              <div className="flex items-center justify-between px-2 py-2">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span className="text-lg font-medium transition-opacity duration-200" 
                    style={{ opacity: sidebarOpen ? 1 : 0 }}>
                    Market Research
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleSidebar} 
                  className="transition-opacity duration-200"
                  style={{ opacity: sidebarOpen ? 1 : 0 }}
                >
                  {sidebarOpen ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
                </Button>
              </div>
              <div className="px-2 py-2">
                <Button variant="secondary" size="sm" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  <span className="transition-opacity duration-200" 
                    style={{ opacity: sidebarOpen ? 1 : 0 }}>
                    Search...
                  </span>
                  <span className="ml-auto text-xs opacity-60 transition-opacity duration-200"
                    style={{ opacity: sidebarOpen ? 1 : 0 }}>
                    ⌘/
                  </span>
                </Button>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarMenu>
                {mainNavItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <TooltipProvider delayDuration={300}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive(item.href)}
                            tooltip={item.label}
                          >
                            <Link to={item.href} className="flex w-full items-center justify-between">
                              <div className="flex items-center gap-2">
                                {item.icon}
                                <span>{item.label}</span>
                              </div>
                              <div className="flex items-center">
                                {item.badge && (
                                  <Badge variant="outline" className="mr-2 text-xs">
                                    {item.badge}
                                  </Badge>
                                )}
                                {item.keyboard && (
                                  <span className="text-xs text-muted-foreground transition-opacity duration-200"
                                    style={{ opacity: sidebarOpen ? 1 : 0 }}>
                                    {item.keyboard}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </SidebarMenuButton>
                        </TooltipTrigger>
                        <TooltipContent side="right">{item.label}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
              
              {/* Favorites Section */}
              <Collapsible 
                className="px-2 my-2" 
                defaultOpen={true}
              >
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex w-full justify-between items-center mb-1 font-medium text-xs py-1 px-2"
                  >
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2" />
                      <span className="uppercase tracking-wider transition-opacity duration-200"
                        style={{ opacity: sidebarOpen ? 1 : 0 }}>
                        Favorites
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 ui-open:rotate-90"
                      style={{ opacity: sidebarOpen ? 1 : 0 }} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  {recentProjects
                    .filter(project => project.isFavorite)
                    .map(project => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}/dashboard`}
                        className={cn(
                          "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                          isActive(`/projects/${project.id}`)
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-muted"
                        )}
                      >
                        <Star className="h-4 w-4 mr-3 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                        <span className="truncate transition-opacity duration-200"
                          style={{ opacity: sidebarOpen ? 1 : 0 }}>
                          {project.name}
                        </span>
                      </Link>
                    ))}
                </CollapsibleContent>
              </Collapsible>
              
              {/* Recent Projects Section */}
              <Collapsible 
                className="px-2 my-2" 
                defaultOpen={true}
              >
                <CollapsibleTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex w-full justify-between items-center mb-1 font-medium text-xs py-1 px-2"
                  >
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="uppercase tracking-wider transition-opacity duration-200"
                        style={{ opacity: sidebarOpen ? 1 : 0 }}>
                        Recent
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 ui-open:rotate-90"
                      style={{ opacity: sidebarOpen ? 1 : 0 }} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1">
                  {recentProjects.map(project => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}/dashboard`}
                      className={cn(
                        "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                        isActive(`/projects/${project.id}`)
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      <Clock className="h-4 w-4 mr-3 flex-shrink-0" />
                      <span className="truncate transition-opacity duration-200"
                        style={{ opacity: sidebarOpen ? 1 : 0 }}>
                        {project.name}
                      </span>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </SidebarContent>
            <SidebarFooter className="border-t space-y-2 p-2">
              <ThemeToggle variant="ghost" className="w-full justify-start" />
              
              {isLoggedIn ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full flex items-center gap-1"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  <span className="transition-opacity duration-200"
                    style={{ opacity: sidebarOpen ? 1 : 0 }}>
                    Logout
                  </span>
                </Button>
              ) : (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full flex items-center gap-1"
                  onClick={handleLogin}
                >
                  <LogIn className="h-4 w-4 mr-1" />
                  <span className="transition-opacity duration-200"
                    style={{ opacity: sidebarOpen ? 1 : 0 }}>
                    Login
                  </span>
                </Button>
              )}
              
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full flex items-center gap-1 text-xs"
                onClick={() => setShowShortcutsModal(true)}
              >
                <span className="transition-opacity duration-200"
                  style={{ opacity: sidebarOpen ? 1 : 0 }}>
                  Keyboard Shortcuts (?)
                </span>
              </Button>
            </SidebarFooter>
          </Sidebar>
        </SidebarProvider>
      </div>
    </>
  );
};
