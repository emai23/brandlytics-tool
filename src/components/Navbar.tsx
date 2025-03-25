
import { cn } from "@/lib/utils";
import { BarChart3, ChevronDown, Home, LogOut, Settings, User, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

export const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Temporary state for demo purposes
  
  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      href: "/",
      icon: <Home className="w-4 h-4 mr-2" />,
      active: location.pathname === "/"
    },
    {
      label: "Projects",
      href: "/create-project",
      icon: <FolderOpen className="w-4 h-4 mr-2" />,
      active: location.pathname === "/create-project"
    },
    {
      label: "Account",
      href: "/account",
      icon: <User className="w-4 h-4 mr-2" />,
      active: location.pathname === "/account"
    }
  ];

  const toggleLoginState = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          <span className="text-lg font-medium">Market Research & Brand Development Tool</span>
        </div>
        
        <nav className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                item.active
                  ? "bg-accent text-accent-foreground font-medium"
                  : "hover:bg-muted text-muted-foreground"
              )}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
          
          {isLoggedIn && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 ml-2"
              onClick={toggleLoginState} // For demo purposes
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};
