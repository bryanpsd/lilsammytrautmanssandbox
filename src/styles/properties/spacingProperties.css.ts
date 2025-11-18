import { defineProperties } from '@vanilla-extract/sprinkles';
import { mediaQueryBreakpoints } from '../breakpoints';
import { spacing } from '../tokens';

export const responsiveSpacingProperties = defineProperties({
  conditions: mediaQueryBreakpoints,
  defaultCondition: 'xs',
  properties: {
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,

    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
  },
  shorthands: {
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],

    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
});
