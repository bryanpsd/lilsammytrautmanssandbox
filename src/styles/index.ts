/**
 * Main styles export
 * Import global styles and export all tokens and utilities
 */

// Import global styles (side effects)
import './global/reset.css';

export { mediaQueryBreakpoints } from './breakpoints';
// Export sprinkles for utility-first styling
export { type Sprinkles, sprinkles } from './sprinkles.css';

// Export tokens
export * from './tokens';
