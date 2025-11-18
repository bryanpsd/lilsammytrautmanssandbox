import { defineProperties } from '@vanilla-extract/sprinkles';
import { mediaQueryBreakpoints } from '../breakpoints';
import { fontFamily, fontSize } from '../tokens';

const buildTextProperties = <T>(tokens: T) => {
  return {
    inherit: 'inherit',
    ...tokens,
  };
};

export const staticTextProperties = defineProperties({
  properties: {
    fontFamily: buildTextProperties(fontFamily),
    fontWeight: {
      inherit: 'inherit',
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
      normal: 'normal',
      bold: 'bold',
    },
    fontSize: buildTextProperties(fontSize),
    lineHeight: {
      inherit: 'inherit',
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
});

export const interactiveTextProperties = defineProperties({
  conditions: {
    default: {},
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
  },
  defaultCondition: 'default',
  properties: {
    textDecoration: ['none', 'underline', 'line-through'],
  },
});

export const responsiveTextProperties = defineProperties({
  conditions: mediaQueryBreakpoints,
  defaultCondition: 'xs',
  properties: {
    textAlign: ['left', 'center', 'right', 'justify'],
    textOverflow: ['clip', 'ellipsis'],
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-wrap', 'pre-line'],
    wordBreak: ['normal', 'break-all', 'break-word'],
  },
});
