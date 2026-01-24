/**
 * ThemeProvider component for managing light/dark mode
 *
 * Provides React Context for theme management with support for:
 * - Light, dark, and system preference modes
 * - localStorage persistence
 * - Real-time system preference updates
 * - Pure CSS variable-based theming
 */

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { resolveTheme, type Theme, type ResolvedTheme } from '../utils/theme';

export interface ThemeProviderProps {
  /** The child components to wrap */
  children: React.ReactNode;
  /** Default theme preference (defaults to 'system') */
  defaultTheme?: Theme;
  /** localStorage key for persisting theme choice (if undefined, no persistence) */
  storageKey?: string;
  /** Disable transition animation when theme changes */
  disableTransitionOnChange?: boolean;
  /** Class prefix for theme wrapper (defaults to 'tactus-hitl-theme') */
  classPrefix?: string;
}

export interface ThemeContextValue {
  /** Current theme preference (light, dark, or system) */
  theme: Theme;
  /** Set theme preference */
  setTheme: (theme: Theme) => void;
  /** The actual resolved theme (light or dark) */
  resolvedTheme: ResolvedTheme;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * ThemeProvider component
 *
 * Wraps your application or HITL components to provide theme management.
 *
 * @example
 * ```tsx
 * import { ThemeProvider } from '@anthus/tactus-hitl-components';
 *
 * function App() {
 *   return (
 *     <ThemeProvider defaultTheme="system" storageKey="my-app-theme">
 *       <YourComponents />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey,
  disableTransitionOnChange = false,
  classPrefix = 'tactus-hitl-theme',
}: ThemeProviderProps) {
  // Load initial theme from localStorage or use default
  const [theme, setThemeState] = useState<Theme>(() => {
    if (storageKey && typeof window !== 'undefined') {
      const stored = localStorage.getItem(storageKey) as Theme | null;
      if (stored && ['light', 'dark', 'system'].includes(stored)) {
        return stored;
      }
    }
    return defaultTheme;
  });

  // Compute the resolved theme (system -> light/dark)
  const resolvedTheme = useMemo(() => resolveTheme(theme), [theme]);

  // Sync with external defaultTheme changes (for controlled usage)
  useEffect(() => {
    if (defaultTheme && defaultTheme !== theme) {
      setThemeState(defaultTheme);
    }
  }, [defaultTheme]);

  // Listen for system theme changes when theme is set to 'system'
  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = () => {
      // Force re-render to pick up new system theme
      setThemeState('system');
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
    // Legacy browsers
    else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [theme]);

  // Update localStorage when theme changes
  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, theme);
    }
  }, [theme, storageKey]);

  // Apply theme class to wrapper (handled by wrapper div below)
  // No need to modify document.documentElement - we scope to our wrapper

  const setTheme = (newTheme: Theme) => {
    // Disable transitions temporarily if requested
    if (disableTransitionOnChange) {
      const style = document.createElement('style');
      style.textContent = '* { transition: none !important; }';
      document.head.appendChild(style);

      setTimeout(() => {
        document.head.removeChild(style);
      }, 0);
    }

    setThemeState(newTheme);
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
    }),
    [theme, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className={`${classPrefix}${resolvedTheme === 'dark' ? ' dark' : ''}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 *
 * @throws Error if used outside ThemeProvider
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { theme, setTheme, resolvedTheme } = useTheme();
 *
 *   return (
 *     <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
 *       Current: {resolvedTheme}
 *     </button>
 *   );
 * }
 * ```
 */
export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}
