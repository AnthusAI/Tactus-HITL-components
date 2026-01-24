/**
 * Theme utilities for detecting and applying themes
 */

export type Theme = 'light' | 'dark' | 'system';
export type ResolvedTheme = 'light' | 'dark';

/**
 * Detect the system theme preference
 * @returns 'dark' if system prefers dark mode, 'light' otherwise
 */
export function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDark ? 'dark' : 'light';
}

/**
 * Resolve a theme preference to an actual theme
 * @param preference - The theme preference ('light', 'dark', or 'system')
 * @returns The resolved theme ('light' or 'dark')
 */
export function resolveTheme(preference: Theme): ResolvedTheme {
  if (preference === 'system') {
    return getSystemTheme();
  }
  return preference;
}

/**
 * Apply theme classes to an element
 * @param theme - The theme to apply ('light' or 'dark')
 * @param element - The element to apply the theme to (defaults to document.documentElement)
 * @param classPrefix - The class prefix to use (defaults to 'tactus-hitl-theme')
 */
export function applyTheme(
  theme: ResolvedTheme,
  element?: HTMLElement,
  classPrefix: string = 'tactus-hitl-theme'
): void {
  const targetElement = element || document.documentElement;

  // Ensure base class is present
  if (!targetElement.classList.contains(classPrefix)) {
    targetElement.classList.add(classPrefix);
  }

  // Toggle dark class
  if (theme === 'dark') {
    targetElement.classList.add('dark');
  } else {
    targetElement.classList.remove('dark');
  }
}
