import { globalStyle, style } from '@vanilla-extract/css';
import { fontFamily, fontSize, spacing } from '../../styles/tokens';

export const introContent = style({
  position: 'relative',
  zIndex: 2,
});

globalStyle(`${introContent} h1`, {
  fontFamily: `'Saira Stencil One', ${fontFamily.sans}`,
  fontSize: fontSize['5xl'],
  marginBottom: spacing[4],
  textAlign: 'center',
  lineHeight: 1.2,
});
