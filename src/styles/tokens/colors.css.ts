/**
 * Color tokens
 * These are your raw color values that can be used across themes
 */

export const colors = {
  // Brand colors
  brand: {
    primary: '#315c2b',
    primaryLightest: '#9ea93f',
    primaryLight: '#60712f',
    primaryDark: '#274029',
    primaryDarkest: '#181f1c',
  },

  // Neutral colors
  neutral: {
    white: '#ffffff',
    black: '#000000',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    gray300: '#d1d5db',
    gray400: '#9ca3af',
    gray500: '#6b7280',
    gray600: '#4b5563',
    gray700: '#374151',
    gray800: '#1f2937',
    gray900: '#111827',
  },

  // Semantic colors
  success: {
    light: '#d1fae5',
    base: '#10b981',
    dark: '#065f46',
  },
  error: {
    light: '#fee2e2',
    base: '#ef4444',
    dark: '#991b1b',
  },
  warning: {
    light: '#fef3c7',
    base: '#f59e0b',
    dark: '#92400e',
  },
  info: {
    light: '#dbeafe',
    base: '#3b82f6',
    dark: '#1e40af',
  },
} as const;
