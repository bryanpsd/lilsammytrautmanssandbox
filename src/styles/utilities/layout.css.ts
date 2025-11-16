import { style } from '@vanilla-extract/css';
import { spacing } from '../tokens';

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
