import { style } from '@vanilla-extract/css';
import { sprinkles } from '../styles';
import { mediaQuery } from '../styles/tokens';

export const main = [
  sprinkles({
    width: 'full',
    paddingX: 6,
    paddingTop: 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  style({
    marginLeft: 'auto',
    marginRight: 'auto',
  }),
].join(' ');

const baseSandSvg = style({
  transform: 'translateY(-50%)',
  '@media': {
    [mediaQuery.md]: {
      top: '41%',
    },

    [mediaQuery.xl]: {
      top: '35%',
    },
  },
});

export const sandSvg = [
  sprinkles({
    position: 'absolute',
    width: 'full',
    height: 'auto',
    zIndex: 10,
  }),
  baseSandSvg,
  style({
    top: '35%',
    left: 0,
    right: 0,
  }),
].join(' ');

const baseSand = style({
  '@media': {
    [mediaQuery.md]: {
      top: '48%',
    },
  },
});

export const sand = [
  sprinkles({
    position: 'absolute',
    zIndex: 'auto',
    backgroundColor: 'secondary',
  }),
  baseSand,
  style({
    top: '40%',
    left: 0,
    right: 0,
    bottom: 0,
  }),
].join(' ');
