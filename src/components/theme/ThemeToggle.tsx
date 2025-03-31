
import { Sun, Moon, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme/ThemeProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";

interface ThemeToggleProps {
  className?: string;
  variant?: "default" | "outline" | "ghost" | "glass";
  showLabel?: boolean;
  size?: "default" | "sm" | "lg" | "icon";
}

export function ThemeToggle({ 
  className, 
  variant = "ghost", 
  showLabel = true,
  size = "default" 
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleSetTheme = (newTheme: "light" | "dark" | "system") => {
    setTheme(newTheme);
    
    const themeName = newTheme === 'system' 
      ? `system (${window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'})`
      : newTheme;
      
    toast({
      title: "Theme updated",
      description: `Theme changed to ${themeName}`,
      duration: 1500,
    });
  };

  const getThemeIcon = () => {
    if (resolvedTheme === "dark") {
      return (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      );
    }
    return (
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    );
  };

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button 
              variant={variant === "glass" ? "outline" : variant}
              size={size} 
              className={cn(
                "focus-visible:ring-2 focus-visible:ring-ring theme-transition",
                variant === "glass" && "glass-effect-light",
                showLabel ? "w-full justify-start px-2" : "h-9 w-9 p-0",
                className
              )}
              aria-label="Change theme"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              {showLabel && (
                <span className="ml-2 font-medium">Theme</span>
              )}
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="right" align="center" className="glass-popover">
          <p>Change theme</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end" className="w-40 glass-popover">
        <DropdownMenuItem 
          onClick={() => handleSetTheme("light")}
          className="flex cursor-pointer items-center gap-2"
        >
          <Sun className="h-4 w-4" />
          <span>Light</span>
          {theme === "light" && (
            <span className="ml-auto text-xs text-primary">Active</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleSetTheme("dark")}
          className="flex cursor-pointer items-center gap-2"
        >
          <Moon className="h-4 w-4" />
          <span>Dark</span>
          {theme === "dark" && (
            <span className="ml-auto text-xs text-primary">Active</span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleSetTheme("system")}
          className="flex cursor-pointer items-center gap-2"
        >
          <Monitor className="h-4 w-4" />
          <span>System</span>
          {theme === "system" && (
            <span className="ml-auto text-xs text-primary">Active</span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
