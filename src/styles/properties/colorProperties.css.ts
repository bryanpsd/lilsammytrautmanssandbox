import { defineProperties } from '@vanilla-extract/sprinkles';
import { colors } from '../tokens';

const buildColorProperties = <T>(tokens: T) => {
  return {
    inherit: 'inherit',
    transparent: 'transparent',
    currentColor: 'currentColor',
    ...tokens,
  };
};

export const staticColorProperties = defineProperties({
  properties: {
    color: buildColorProperties(colors.neutral),
    backgroundColor: buildColorProperties({
      ...colors.brand,
      ...colors.neutral,
      ...colors.success,
      ...colors.error,
      ...colors.warning,
      ...colors.info,
    }),
    fill: buildColorProperties(colors.neutral),
    stroke: buildColorProperties(colors.neutral),
  },
});
