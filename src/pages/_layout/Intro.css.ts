import { globalStyle, style } from '@vanilla-extract/css';
import { fontFamily, spacing } from '../../styles/tokens';

export const introContent = style({
  position: 'relative',
  zIndex: 2,
});

export const introHeading = style({});

globalStyle(`${introHeading} h1`, {
  fontFamily: `'Saira Stencil One', ${fontFamily.sans}`,
  marginBottom: spacing[4],
  textAlign: 'center',
});

export const image = style({
  display: 'block',
  width: '100%',
  height: 'auto',
});
