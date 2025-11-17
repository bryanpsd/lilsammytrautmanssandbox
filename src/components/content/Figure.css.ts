import { style } from '@vanilla-extract/css';
import { colors, fontSize, lineHeight, spacing } from '../../styles';

export const image = style({
  display: 'block',
  width: '100%',
  height: 'auto',
});

export const caption = style({
  marginTop: spacing[2],
  color: colors.neutral.gray600,
  fontSize: fontSize.sm,
  lineHeight: lineHeight.normal,
  textAlign: 'center',
});
