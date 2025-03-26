
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
      icon: <BarChart3 className="w-4 h-4 mr-2" />,
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
    <header className="sticky top-0 z-40 w-full border-b border-white/10 backdrop-blur-md bg-background/30">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          <span className="text-lg font-medium text-gradient">Market Research & Brand Development Tool</span>
        </div>
        
        <nav className="flex items-center space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center nav-item transition-all duration-200",
                item.active
                  ? "nav-item-active"
                  : "nav-item-inactive"
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
              className="flex items-center gap-1 ml-2 border-white/10 hover:bg-primary/20 hover:text-white"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1 ml-2 border-white/10 hover:bg-primary/20 hover:text-white"
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
