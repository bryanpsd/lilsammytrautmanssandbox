# Vanilla Extract Styles Guide

## Structure

```
src/styles/
├── tokens/          # Design tokens (raw values)
├── global/          # Global styles
├── utilities/       # Utility classes
└── index.ts         # Main export
```

## Usage

### 1. Import Global Styles in Layout

In your `Layout.astro`:

```astro
---
import '../styles'; // Import global styles
---

<html>
  <body>
    <slot />
  </body>
</html>
```

### 2. Use Tokens Directly in Components

```typescript
// Component.css.ts
import { style } from '@vanilla-extract/css';
import { colors, spacing, fontSize, fontWeight, lineHeight } from '../styles';

export const button = style({
  backgroundColor: colors.brand.primary,
  color: colors.neutral.white,
  padding: `${spacing[3]} ${spacing[6]}`,
  borderRadius: '0.375rem',
  fontSize: fontSize.base,
  fontWeight: fontWeight.semibold,
  lineHeight: lineHeight.normal,
  
  ':hover': {
    backgroundColor: colors.brand.primaryDark,
  },
});
```

### 3. Use Utility Classes

```typescript
import { container, flexCenter, px, m } from '../styles';

<div className={`${container} ${px[4]} ${m[2]}`}>
  <div className={flexCenter}>
    Content here
  </div>
</div>
```

### 4. Available Tokens

```typescript
// Colors
import { colors } from '../styles';

colors.brand.primary           // #315c2b (hunter green)
colors.brand.primaryLightest   // #9ea93f (apple green)
colors.brand.primaryLight      // #60712f (fern green)
colors.brand.primaryDark       // #274029 (cal poly green)
colors.brand.primaryDarkest    // #181f1c (eerie black)

colors.neutral.white           // Neutral colors
colors.neutral.gray900         // etc.

colors.success.base            // Semantic colors
colors.error.base
colors.warning.base
colors.info.base

// Spacing
import { spacing } from '../styles';

spacing[0]   // 0
spacing[1]   // 0.25rem (4px)
spacing[2]   // 0.5rem (8px)
spacing[4]   // 1rem (16px)
spacing[6]   // 1.5rem (24px)
spacing[8]   // 2rem (32px)
spacing[12]  // 3rem (48px)
spacing[16]  // 4rem (64px)

// Typography
import { fontSize, fontWeight, lineHeight, fontFamily } from '../styles';

fontSize.xs, fontSize.sm, fontSize.base, fontSize.lg, fontSize.xl, fontSize['2xl'], fontSize['3xl']
fontWeight.normal, fontWeight.medium, fontWeight.semibold, fontWeight.bold
lineHeight.tight, lineHeight.normal, lineHeight.relaxed
fontFamily.sans, fontFamily.serif, fontFamily.mono
```

### 5. Responsive Design

```typescript
import { style } from '@vanilla-extract/css';
import { fontSize, mediaQuery } from '../styles';

export const responsive = style({
  fontSize: fontSize.base,
  
  '@media': {
    [mediaQuery.md]: {
      fontSize: fontSize.lg,
    },
    [mediaQuery.lg]: {
      fontSize: fontSize.xl,
    },
  },
});
```

## Available Utilities

### Layout
- `container` - Max-width container with auto margins
- `flex`, `flexCol` - Flexbox layouts
- `flexCenter`, `flexBetween` - Flex alignment helpers
- `grid`, `gridCols2`, `gridCols3`, `gridCols4` - Grid layouts

### Spacing
- `m[0-5]`, `mt[0-5]`, `mb[0-5]`, `mx[0-5]`, `my[0-5]` - Margin utilities
- `p[0-5]`, `pt[0-5]`, `pb[0-5]`, `px[0-5]`, `py[0-5]` - Padding utilities
- `gap[0-5]` - Gap utilities for flex/grid
- `mx.auto` - Center with auto margins

## Best Practices

1. **Use raw tokens directly** - Simple, predictable, no CSS variable scoping issues
2. **Use utility classes** for common patterns to reduce CSS bundle size
3. **Keep tokens semantic** - name things by purpose, not appearance
4. **Import only what you need** to keep bundle sizes small
5. **Use TypeScript autocomplete** to discover available tokens
