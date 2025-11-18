/**
 * Breakpoints for responsive design
 */

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 640,
  lg: 960,
  xl: 1280,
} as const;

export const breakpointQuery = {
  xs: `(min-width: ${breakpoints.xs}px)`,
  sm: `(min-width: ${breakpoints.sm}px)`,
  md: `(min-width: ${breakpoints.md}px)`,
  lg: `(min-width: ${breakpoints.lg}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
} as const;

/** Utility to generate media query breakpoints for Vanilla Extract Sprinkles conditions */
export const mediaQueryBreakpoints = {
  xs: {},
  sm: { '@media': breakpointQuery.sm },
  md: { '@media': breakpointQuery.md },
  lg: { '@media': breakpointQuery.lg },
  xl: { '@media': breakpointQuery.xl },
} as const;
