import { style } from '@vanilla-extract/css';
import { colors, mediaQuery, spacing } from '../tokens';

/**
 * Layout utility classes
 */

export const container = style({
  width: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: spacing[6],
  paddingRight: spacing[6],
});

export const flex = style({
  display: 'flex',
});

export const flexCol = style({
  display: 'flex',
  flexDirection: 'column',
});

export const flexRow = style({
  flexDirection: 'row',
});

export const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const flexBetween = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const grid = style({
  display: 'grid',
});

export const flexCols2 = style({
  display: 'flex',
  gap: spacing[6],
});

export const gridCols3 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: spacing[6],
});

export const gridCols4 = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: spacing[6],
});

export const sandSvg = style({
  position: 'absolute',
  top: '35%',
  left: 0,
  right: 0,
  transform: 'translateY(-50%)',
  width: '100%',
  height: 'auto',
  zIndex: 1,
  '@media': {
    [mediaQuery.md]: {
      top: '41%',
    },

    [mediaQuery.xl]: {
      top: '35%',
    },
  },
});

export const sand = style({
  position: 'absolute',
  top: '40%',
  '@media': {
    [mediaQuery.md]: {
      top: '48%',
    },
  },
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: colors.brand.secondary,
  zIndex: 0,
});
