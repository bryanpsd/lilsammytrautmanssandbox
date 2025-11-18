import { createSprinkles } from '@vanilla-extract/sprinkles';
import { staticBorderProperties } from './properties/borderProperties.css';
import { staticColorProperties } from './properties/colorProperties.css';
import {
  interactiveDisplayProperties,
  responsiveDisplayProperties,
  staticDisplayProperties,
} from './properties/displayProperties.css';
import { responsiveSpacingProperties } from './properties/spacingProperties.css';
import {
  interactiveTextProperties,
  responsiveTextProperties,
  staticTextProperties,
} from './properties/textProperties.css';

/**
 * Sprinkles - Utility-first CSS using Vanilla Extract
 * Similar to Tailwind CSS but type-safe and zero-runtime
 */
export const sprinkles = createSprinkles(
  staticBorderProperties,
  staticColorProperties,
  staticDisplayProperties,
  interactiveDisplayProperties,
  responsiveDisplayProperties,
  responsiveSpacingProperties,
  staticTextProperties,
  interactiveTextProperties,
  responsiveTextProperties
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
