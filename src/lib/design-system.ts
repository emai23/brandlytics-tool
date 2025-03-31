/**
 * Design System Token Reference
 * 
 * This file serves as documentation for the design system tokens used in the application.
 * These values are already configured in the tailwind.config.js and index.css files.
 */

export const designSystem = {
  // Color Palette (HSL values)
  colors: {
    // Primary (Blue)
    primary: {
      '50': '215 100% 97%',
      '100': '214 95% 93%',
      '200': '213 97% 87%',
      '300': '212 96% 78%',
      '400': '213 94% 68%',
      '500': '215 76% 56%',
      '600': '217 91% 49%',
      '700': '221 83% 41%',
      '800': '224 76% 34%',
      '900': '226 71% 28%',
      '950': '228 75% 18%',
    },
    
    // Secondary (Slate)
    secondary: {
      '50': '210 40% 98%',
      '100': '214 32% 91%',
      '200': '213 27% 84%',
      '300': '215 20% 65%',
      '400': '215 16% 47%',
      '500': '215 19% 35%',
      '600': '215 25% 27%',
      '700': '217 33% 17%',
      '800': '221 39% 11%',
      '900': '224 71% 4%',
      '950': '228 84% 2%',
    },
    
    // Destructive (Red)
    destructive: {
      '50': '0 86% 97%',
      '100': '0 93% 94%',
      '200': '0 96% 89%',
      '300': '0 94% 82%',
      '400': '0 91% 71%',
      '500': '0 84% 60%',
      '600': '0 72% 51%',
      '700': '0 74% 42%',
      '800': '0 70% 35%',
      '900': '0 63% 31%',
      '950': '0 75% 15%',
    },
    
    // Success (Green)
    success: {
      DEFAULT: '142 76% 36%',
      foreground: '0 0% 98%',
    },
    
    // Warning (Amber)
    warning: {
      DEFAULT: '38 92% 50%',
      foreground: '0 0% 98%',
    },
    
    // Info (Cyan)
    info: {
      DEFAULT: '199 89% 48%',
      foreground: '0 0% 98%',
    },
  },
  
  // Typography Scale
  typography: {
    fontFamilies: {
      sans: ['Inter var', 'Inter', 'ui-sans-serif', 'system-ui'],
      display: ['Satoshi', 'Inter', 'system-ui'],
      mono: ['JetBrains Mono', 'SF Mono', 'ui-monospace'],
    },
    fontSizes: {
      '2xs': '0.625rem', // 10px
      'xs': '0.75rem',   // 12px
      'sm': '0.875rem',  // 14px
      'base': '1rem',    // 16px
      'lg': '1.125rem',  // 18px
      'xl': '1.25rem',   // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Spacing System
  spacing: {
    '0': '0',
    'px': '1px',
    '0.5': '0.125rem', // 2px
    '1': '0.25rem',    // 4px
    '1.5': '0.375rem', // 6px
    '2': '0.5rem',     // 8px
    '2.5': '0.625rem', // 10px
    '3': '0.75rem',    // 12px
    '3.5': '0.875rem', // 14px
    '4': '1rem',       // 16px
    '5': '1.25rem',    // 20px
    '6': '1.5rem',     // 24px
    '7': '1.75rem',    // 28px
    '8': '2rem',       // 32px
    '9': '2.25rem',    // 36px
    '10': '2.5rem',    // 40px
    '11': '2.75rem',   // 44px
    '12': '3rem',      // 48px
    '14': '3.5rem',    // 56px
    '16': '4rem',      // 64px
    '20': '5rem',      // 80px
    '24': '6rem',      // 96px
    '28': '7rem',      // 112px
    '32': '8rem',      // 128px
    '36': '9rem',      // 144px
    '40': '10rem',     // 160px
    '44': '11rem',     // 176px
    '48': '12rem',     // 192px
    '52': '13rem',     // 208px
    '56': '14rem',     // 224px
    '60': '15rem',     // 240px
    '64': '16rem',     // 256px
    '72': '18rem',     // 288px
    '80': '20rem',     // 320px
    '96': '24rem',     // 384px
  },
  
  // Border Radius
  radii: {
    'xs': '0.125rem', // 2px
    'sm': '0.25rem',  // 4px
    'md': '0.5rem',   // 8px
    'lg': '0.75rem',  // 12px
    'full': '9999px',
  },
  
  // Box Shadows
  shadows: {
    'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
  
  // Motion
  motion: {
    ease: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    duration: {
      fastest: '50ms',
      faster: '100ms',
      fast: '150ms',
      normal: '200ms',
      slow: '300ms',
      slower: '400ms',
      slowest: '500ms',
    },
  },
  
  // Z-index
  zIndices: {
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
    '100': 100,
    'auto': 'auto',
  },
  
  // Breakpoints
  breakpoints: {
    'xs': '480px',
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1400px',
  },
};

/**
 * CSS custom properties reference
 * These are the CSS custom properties set in index.css
 */
export const cssCustomProperties = {
  // Dark mode properties are transformed in the .dark selector
  light: {
    // Base
    '--background': '0 0% 100%',
    '--foreground': '222 47% 11%',
    
    // Primary
    '--primary': '215 76% 56%',
    '--primary-foreground': '210 40% 98%',
    
    // Secondary
    '--secondary': '215 16% 47%',
    '--secondary-foreground': '210 40% 98%',
    
    // ... other tokens documented in index.css
  },
  
  dark: {
    // Base
    '--background': '222 47% 5%',
    '--foreground': '210 40% 98%',
    
    // Primary
    '--primary': '217 91% 60%',
    '--primary-foreground': '222 47% 5%',
    
    // Secondary
    '--secondary': '217 32% 17%',
    '--secondary-foreground': '210 40% 98%',
    
    // ... other tokens documented in index.css
  },
};

/**
 * Helper function that converts a Tailwind className string to equivalent CSS styles
 * This is useful for generating documentation or debugging
 * @param classNames - Tailwind class names as a string
 * @returns Object of equivalent CSS properties
 */
export function tailwindToCSS(classNames: string): Record<string, string> {
  // This is just a placeholder function for illustration
  // In a real implementation, you would parse Tailwind classes and convert to CSS
  return {};
}

/**
 * Component variants
 * Documentation of available component variants in the design system
 */
export const componentVariants = {
  button: {
    variants: [
      'default',
      'destructive',
      'outline',
      'secondary',
      'ghost',
      'link',
    ],
    sizes: ['sm', 'default', 'lg', 'icon'],
  },
  card: {
    variants: [
      'default',
      'interactive',
      'bordered',
      'gradient',
    ],
  },
  badge: {
    variants: [
      'default',
      'secondary',
      'destructive',
      'outline',
    ],
  },
  // ... document other component variants
};
