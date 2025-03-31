
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
};

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
  resolvedTheme: "light",
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );
  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    function onSystemThemeChange() {
      if (theme === "system") {
        updateTheme();
      }
    }
    
    mediaQuery.addEventListener("change", onSystemThemeChange);
    return () => mediaQuery.removeEventListener("change", onSystemThemeChange);
  }, [theme]);

  // Apply theme to HTML element
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
    
    updateTheme();
  }, [theme, mounted]);

  // Make sure theme switch doesn't cause flash during initial load
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove the initial-theme class which prevents transition during page load
    if (mounted) {
      setTimeout(() => {
        root.classList.remove('prevent-transition');
        root.style.colorScheme = resolvedTheme;
      }, 0);
    } else {
      root.classList.add('prevent-transition');
    }
  }, [mounted, resolvedTheme]);

  function updateTheme() {
    if (!mounted) return;
    
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    let currentTheme: "light" | "dark";
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.classList.add(systemTheme);
      currentTheme = systemTheme;
    } else {
      root.classList.add(theme);
      currentTheme = theme as "light" | "dark";
    }

    // Update data-theme attribute for component libraries that use it
    root.setAttribute("data-theme", currentTheme);
    
    // Track the resolved theme (either 'dark' or 'light')
    setResolvedTheme(currentTheme);
  }

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
    resolvedTheme,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
