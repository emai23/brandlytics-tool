
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items = [], className }: BreadcrumbsProps) {
  const location = useLocation();
  
  // Generate breadcrumbs from path if no items provided
  const pathItems: BreadcrumbItem[] = items.length > 0 
    ? items 
    : location.pathname
        .split('/')
        .filter(Boolean)
        .map((segment, index, array) => {
          // Create a path up to this segment
          const href = `/${array.slice(0, index + 1).join('/')}`;
          // Format the label (capitalize, replace hyphens)
          const label = segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, char => char.toUpperCase());
            
          return { label, href };
        });

  return (
    <nav className={cn("flex items-center text-sm text-muted-foreground", className)}>
      <ol className="flex items-center space-x-1">
        <li>
          <Link
            to="/"
            className="flex items-center hover:text-foreground transition-colors"
          >
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {pathItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-1" />
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
