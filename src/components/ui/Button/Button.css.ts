import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { sprinkles } from '../../../styles';
import { colors } from '../../../styles/tokens';

/**
 * Button Component Styles
 * Using sprinkles for utility properties and recipes for variants
 */

const baseButton = style({
  border: 'none',
  transition: 'all 0.2s ease',

  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },

  ':active': {
    transform: 'translateY(0)',
  },

  ':focus': {
    outline: 'none',
  },
});

export const button = recipe({
  base: [
    baseButton,
    sprinkles({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingY: 4,
      paddingX: 8,
      fontSize: 'base',
      fontWeight: 600,
      lineHeight: 'normal',
      borderRadius: 'md',
      cursor: 'pointer',
    }),
  ],
  variants: {
    variant: {
      primary: style({
        backgroundColor: colors.brand.primary,
        color: colors.neutral.white,
        ':hover': {
          backgroundColor: colors.brand.primaryDark,
        },
        ':active': {
          backgroundColor: colors.brand.primaryDark,
        },
        ':focus': {
          boxShadow: `0 0 0 3px ${colors.brand.primary}40`,
        },
      }),
      secondary: style({
        backgroundColor: colors.neutral.gray200,
        color: colors.neutral.gray900,
        ':hover': {
          backgroundColor: colors.neutral.gray300,
        },
      }),
      danger: style({
        backgroundColor: colors.error.base,
        color: colors.neutral.white,
        ':hover': {
          backgroundColor: colors.error.dark,
        },
      }),
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
