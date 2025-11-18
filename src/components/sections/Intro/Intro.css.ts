import { globalStyle, style } from '@vanilla-extract/css';
import { sprinkles } from '../../../styles';
import { fontFamily } from '../../../styles/tokens';

export const introContent = sprinkles({
  position: 'relative',
  zIndex: 20,
});

export const introHeading = style({});

globalStyle(`${introHeading} h1`, {
  fontFamily: `'Saira Stencil One', ${fontFamily.sans}`,
  marginBottom: '1rem',
  textAlign: 'center',
});

export const image = sprinkles({
  display: 'block',
  width: 'full',
  height: 'auto',
});
