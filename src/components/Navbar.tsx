
import { cn } from "@/lib/utils";
import { BarChart3, LogIn, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to not logged in
  
  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      href: "/",
      icon: <User className="w-4 h-4 mr-2" />,
      active: location.pathname === "/"
    },
    {
      label: "Projects",
      href: "/create-project",
      icon: <BarChart3 className="w-4 h-4 mr-2" />,
      active: location.pathname === "/create-project"
    },
    {
      label: "Account",
      href: "/account",
      icon: <User className="w-4 h-4 mr-2" />,
      active: location.pathname === "/account"
    }
  ];

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
          
          {isLoggedIn ? (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 ml-2"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 ml-2"
              onClick={handleLogin}
            >
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};
