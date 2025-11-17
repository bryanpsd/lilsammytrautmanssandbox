import { style } from '@vanilla-extract/css';
import { colors, fontSize, fontWeight, lineHeight, spacing } from '../../../styles/tokens';

/**
 * Example Button Component Styles
 * Using raw tokens for direct values instead of theme contract
 */

export const button = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: `${spacing[4]} ${spacing[8]}`,
  fontSize: fontSize.base,
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
  borderRadius: '0.5rem',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  backgroundColor: colors.brand.primary,
  color: colors.neutral.white,

  ':hover': {
    backgroundColor: colors.brand.primaryDark,
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },

  ':active': {
    backgroundColor: colors.brand.primaryDark,
    transform: 'translateY(0)',
  },

  ':focus': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${colors.brand.primary}40`,
  },
});

export const buttonSecondary = style({
  backgroundColor: colors.neutral.gray200,
  color: colors.neutral.gray900,

  ':hover': {
    backgroundColor: colors.neutral.gray300,
  },
});

export const buttonDanger = style({
  backgroundColor: colors.error.base,
  color: colors.neutral.white,

  ':hover': {
    backgroundColor: colors.error.dark,
  },
});
