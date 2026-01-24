/**
 * ThemeToggle component - Pre-built button for toggling between themes
 */

import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export interface ThemeToggleProps {
  /** Additional CSS class name */
  className?: string;
}

/**
 * Pre-built theme toggle button
 *
 * Cycles through: light → dark → system
 *
 * @example
 * ```tsx
 * import { ThemeToggle } from '@anthus/tactus-hitl-components';
 *
 * function Header() {
 *   return (
 *     <header>
 *       <h1>My App</h1>
 *       <ThemeToggle />
 *     </header>
 *   );
 * }
 * ```
 */
export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const themeOrder: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system'];
    const currentIndex = themeOrder.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeOrder.length;
    setTheme(themeOrder[nextIndex]);
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun size={18} />;
      case 'dark':
        return <Moon size={18} />;
      case 'system':
        return <Monitor size={18} />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Switch to dark mode';
      case 'dark':
        return 'Switch to system mode';
      case 'system':
        return 'Switch to light mode';
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className={`tactus-hitl-button tactus-hitl-button-secondary ${className}`.trim()}
      aria-label={getLabel()}
      title={getLabel()}
      type="button"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
      }}
    >
      {getIcon()}
      <span style={{ textTransform: 'capitalize' }}>{theme}</span>
    </button>
  );
}
