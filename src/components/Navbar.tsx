
import { cn } from "@/lib/utils";
import { BarChart3, Briefcase, ChevronDown, Home, LineChart, PieChart, Search, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("dashboard");
  
  const navItems: NavItem[] = [
    {
      label: "Dashboard",
      href: "#dashboard",
      icon: <Home className="w-4 h-4 mr-2" />,
      active: activeSection === "dashboard"
    },
    {
      label: "Brand Analysis",
      href: "#brand-analysis",
      icon: <Briefcase className="w-4 h-4 mr-2" />,
      active: activeSection === "brand-analysis"
    },
    {
      label: "Market Trends",
      href: "#market-trends",
      icon: <LineChart className="w-4 h-4 mr-2" />,
      active: activeSection === "market-trends"
    },
    {
      label: "Competitor Analysis",
      href: "#competitor-analysis",
      icon: <Users className="w-4 h-4 mr-2" />,
      active: activeSection === "competitor-analysis"
    },
    {
      label: "Research Tools",
      href: "#research-tools",
      icon: <BarChart3 className="w-4 h-4 mr-2" />,
      active: activeSection === "research-tools"
    }
  ];
  
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <PieChart className="w-5 h-5 text-primary" />
          <span className="text-lg font-medium">Brandlytics</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href.substring(1));
              }}
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-md transition-colors",
                item.active
                  ? "bg-accent text-accent-foreground font-medium"
                  : "hover:bg-muted text-muted-foreground"
              )}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-2">
          <div className="hidden md:block relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground/70" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-64 pl-8 rounded-md bg-background"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex items-center gap-1"
          >
            Projects
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </header>
  );
};
