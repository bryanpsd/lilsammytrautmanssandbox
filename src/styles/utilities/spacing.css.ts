import { styleVariants } from '@vanilla-extract/css';
import { spacing } from '../tokens';

// Margin utilities
export const m = styleVariants({
  0: { margin: spacing[2] },
  1: { margin: spacing[4] },
  2: { margin: spacing[6] },
  3: { margin: spacing[8] },
  4: { margin: spacing[12] },
  5: { margin: spacing[16] },
});

export const mt = styleVariants({
  0: { marginTop: spacing[2] },
  1: { marginTop: spacing[4] },
  2: { marginTop: spacing[6] },
  3: { marginTop: spacing[8] },
  4: { marginTop: spacing[12] },
  5: { marginTop: spacing[16] },
});

export const mb = styleVariants({
  0: { marginBottom: spacing[2] },
  1: { marginBottom: spacing[4] },
  2: { marginBottom: spacing[6] },
  3: { marginBottom: spacing[8] },
  4: { marginBottom: spacing[12] },
  5: { marginBottom: spacing[16] },
});

export const mx = styleVariants({
  0: { marginLeft: spacing[2], marginRight: spacing[2] },
  1: { marginLeft: spacing[4], marginRight: spacing[4] },
  2: { marginLeft: spacing[6], marginRight: spacing[6] },
  3: { marginLeft: spacing[8], marginRight: spacing[8] },
  4: { marginLeft: spacing[12], marginRight: spacing[12] },
  5: { marginLeft: spacing[16], marginRight: spacing[16] },
  auto: { marginLeft: 'auto', marginRight: 'auto' },
});

export const my = styleVariants({
  0: { marginTop: spacing[2], marginBottom: spacing[2] },
  1: { marginTop: spacing[4], marginBottom: spacing[4] },
  2: { marginTop: spacing[6], marginBottom: spacing[6] },
  3: { marginTop: spacing[8], marginBottom: spacing[8] },
  4: { marginTop: spacing[12], marginBottom: spacing[12] },
  5: { marginTop: spacing[16], marginBottom: spacing[16] },
});

// Padding utilities
export const p = styleVariants({
  0: { padding: spacing[2] },
  1: { padding: spacing[4] },
  2: { padding: spacing[6] },
  3: { padding: spacing[8] },
  4: { padding: spacing[12] },
  5: { padding: spacing[16] },
});

export const pt = styleVariants({
  0: { paddingTop: spacing[2] },
  1: { paddingTop: spacing[4] },
  2: { paddingTop: spacing[6] },
  3: { paddingTop: spacing[8] },
  4: { paddingTop: spacing[12] },
  5: { paddingTop: spacing[16] },
});

export const pb = styleVariants({
  0: { paddingBottom: spacing[2] },
  1: { paddingBottom: spacing[4] },
  2: { paddingBottom: spacing[6] },
  3: { paddingBottom: spacing[8] },
  4: { paddingBottom: spacing[12] },
  5: { paddingBottom: spacing[16] },
});

export const px = styleVariants({
  0: { paddingLeft: spacing[2], paddingRight: spacing[2] },
  1: { paddingLeft: spacing[4], paddingRight: spacing[4] },
  2: { paddingLeft: spacing[6], paddingRight: spacing[6] },
  3: { paddingLeft: spacing[8], paddingRight: spacing[8] },
  4: { paddingLeft: spacing[12], paddingRight: spacing[12] },
  5: { paddingLeft: spacing[16], paddingRight: spacing[16] },
});

export const py = styleVariants({
  0: { paddingTop: spacing[2], paddingBottom: spacing[2] },
  1: { paddingTop: spacing[4], paddingBottom: spacing[4] },
  2: { paddingTop: spacing[6], paddingBottom: spacing[6] },
  3: { paddingTop: spacing[8], paddingBottom: spacing[8] },
  4: { paddingTop: spacing[12], paddingBottom: spacing[12] },
  5: { paddingTop: spacing[16], paddingBottom: spacing[16] },
});

// Gap utilities
export const gap = styleVariants({
  0: { gap: spacing[2] },
  1: { gap: spacing[4] },
  2: { gap: spacing[6] },
  3: { gap: spacing[8] },
  4: { gap: spacing[12] },
  5: { gap: spacing[16] },
});
