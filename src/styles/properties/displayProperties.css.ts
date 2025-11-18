import { defineProperties } from '@vanilla-extract/sprinkles';
import { mediaQueryBreakpoints } from '../breakpoints';
import { spacing } from '../tokens';

export const staticDisplayProperties = defineProperties({
  properties: {
    boxSizing: ['border-box', 'content-box'],
    zIndex: {
      auto: 'auto',
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      backdrop: 100,
      modal: 200,
      popover: 300,
      tooltip: 400,
    },
  },
});

export const interactiveDisplayProperties = defineProperties({
  conditions: {
    default: {},
    disabled: { selector: '&:disabled' },
    hover: { selector: '&:hover' },
    active: { selector: '&:active' },
    focus: { selector: '&:focus' },
  },
  defaultCondition: 'default',
  properties: {
    cursor: ['pointer', 'default', 'not-allowed', 'text', 'move'],
    opacity: {
      0: '0',
      25: '0.25',
      50: '0.5',
      75: '0.75',
      100: '1',
    },
  },
});

export const responsiveDisplayProperties = defineProperties({
  conditions: mediaQueryBreakpoints,
  defaultCondition: 'xs',
  properties: {
    width: {
      auto: 'auto',
      full: '100%',
      screen: '100vw',
      'fit-content': 'fit-content',
      'min-content': 'min-content',
      'max-content': 'max-content',
    },
    height: {
      auto: 'auto',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      0: '0',
      full: '100%',
    },
    maxWidth: {
      none: 'none',
      full: '100%',
      screen: '100vw',
    },
    position: ['relative', 'absolute', 'fixed', 'sticky', 'static'],
    display: [
      'block',
      'inline-block',
      'inline',
      'flex',
      'inline-flex',
      'grid',
      'inline-grid',
      'none',
    ],
    visibility: ['visible', 'hidden'],
    overflow: ['auto', 'hidden', 'visible', 'scroll'],
    overflowX: ['auto', 'hidden', 'visible', 'scroll'],
    overflowY: ['auto', 'hidden', 'visible', 'scroll'],

    // Flexbox properties
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    flexGrow: [0, 1],
    flexShrink: [0, 1],
    flexBasis: {
      auto: 'auto',
      full: '100%',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '1/4': '25%',
      '3/4': '75%',
    },
    alignItems: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    alignContent: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'stretch'],
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    alignSelf: ['auto', 'flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    justifySelf: ['auto', 'flex-start', 'center', 'flex-end', 'stretch'],

    gap: spacing,
    columnGap: spacing,
    rowGap: spacing,

    // Grid properties
    gridTemplateColumns: {
      1: 'repeat(1, minmax(0, 1fr))',
      2: 'repeat(2, minmax(0, 1fr))',
      3: 'repeat(3, minmax(0, 1fr))',
      4: 'repeat(4, minmax(0, 1fr))',
      6: 'repeat(6, minmax(0, 1fr))',
      12: 'repeat(12, minmax(0, 1fr))',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-6': 'span 6 / span 6',
      'span-12': 'span 12 / span 12',
      'span-full': '1 / -1',
    },
  },
});
