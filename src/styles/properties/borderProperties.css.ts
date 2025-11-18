import { defineProperties } from '@vanilla-extract/sprinkles';
import { colors } from '../tokens';

export const staticBorderProperties = defineProperties({
  properties: {
    borderColor: {
      ...colors.neutral,
      ...colors.brand,
      transparent: 'transparent',
      currentColor: 'currentColor',
    },
    borderStyle: ['none', 'solid', 'dashed', 'dotted'],
    outline: ['none'],

    borderTopWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
    },
    borderBottomWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
    },
    borderLeftWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
    },
    borderRightWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      4: '4px',
    },

    borderTopLeftRadius: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
    borderTopRightRadius: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
    borderBottomLeftRadius: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
    borderBottomRightRadius: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
  },
  shorthands: {
    borderWidth: ['borderTopWidth', 'borderBottomWidth', 'borderLeftWidth', 'borderRightWidth'],
    borderRadius: [
      'borderTopLeftRadius',
      'borderTopRightRadius',
      'borderBottomLeftRadius',
      'borderBottomRightRadius',
    ],
  },
});
