import { globalStyle, style } from '@vanilla-extract/css';
import { breakpoints, fontFamily, fontSize, spacing } from '../../styles/tokens';

export const sand = style({
  position: 'absolute',
  top: '40%',
  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      top: '50%',
    },
  },
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: '#C2B280',
  zIndex: 0,
});

export const svgSandWrapper = style({
  position: 'absolute',
  top: '35%',
  left: 0,
  right: 0,
  transform: 'translateY(-50%)',
  width: '100%',
  height: 'auto',
  zIndex: 1,
  '@media': {
    [`screen and (min-width: ${breakpoints.md})`]: {
      top: '41%',
    },
    [`screen and (min-width: ${breakpoints.xl})`]: {
      top: '35%',
    },
  },
});

export const svgSand = style({
  width: '100%',
  height: 'auto',
  display: 'block',
});

export const homeContent = style({});

globalStyle(`${homeContent} h1`, {
  fontFamily: `'Saira Stencil One', ${fontFamily.sans}`,
  fontSize: fontSize['5xl'],
  marginBottom: spacing[4],
  textAlign: 'center',
  lineHeight: 1.2,
});
