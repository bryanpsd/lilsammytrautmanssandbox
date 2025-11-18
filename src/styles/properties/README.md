# Sprinkles - Utility-First CSS System

This folder contains Vanilla Extract Sprinkles properties that provide a type-safe, utility-first CSS system similar to Tailwind CSS.

## Structure

```
properties/
  ├── borderProperties.css.ts    # Border width, radius, color, style
  ├── colorProperties.css.ts     # Colors for text, background, fill, stroke
  ├── displayProperties.css.ts   # Display, flex, grid, positioning
  ├── spacingProperties.css.ts   # Margin, padding, gap (responsive)
  └── textProperties.css.ts      # Typography properties
```

## Usage

### Basic Example

```tsx
import { sprinkles } from '@/styles';

// Use sprinkles for utility styling
<div className={sprinkles({
  display: 'flex',
  gap: 4,
  padding: 6,
  backgroundColor: 'primary',
})}>
  Content
</div>
```

### Responsive Design

```tsx
// Responsive values using breakpoints (xs, sm, md, lg, xl)
<div className={sprinkles({
  display: { xs: 'block', md: 'flex' },
  padding: { xs: 2, md: 4, lg: 6 },
  gap: { xs: 2, md: 4 },
})}>
  Responsive layout
</div>
```

### Interactive States

```tsx
// Pseudo-states for interactive elements
<button className={sprinkles({
  cursor: 'pointer',
  opacity: { default: 100, hover: 75, disabled: 50 },
  textDecoration: { default: 'none', hover: 'underline' },
})}>
  Hover me
</button>
```

### Combining with Custom Styles

```tsx
import { sprinkles } from '@/styles';
import { style } from '@vanilla-extract/css';

const customStyle = style({
  // Custom styles that aren't in sprinkles
  transform: 'rotate(45deg)',
});

<div className={`${sprinkles({ padding: 4 })} ${customStyle}`}>
  Combined styling
</div>
```

## Property Categories

### Spacing (Responsive)
- `margin`, `marginX`, `marginY`, `marginTop`, `marginBottom`, `marginLeft`, `marginRight`
- `padding`, `paddingX`, `paddingY`, `paddingTop`, `paddingBottom`, `paddingLeft`, `paddingRight`
- `gap`, `columnGap`, `rowGap`

### Display (Responsive)
- `display`, `position`, `visibility`, `overflow`
- `width`, `height`, `minWidth`, `maxWidth`
- `flexDirection`, `flexWrap`, `alignItems`, `justifyContent`, `gap`
- `gridTemplateColumns`, `gridColumn`

### Colors (Static)
- `color`, `backgroundColor`, `fill`, `stroke`
- Supports all brand, neutral, and semantic colors

### Typography
- Static: `fontFamily`, `fontWeight`, `fontSize`, `lineHeight`
- Interactive: `textDecoration` (with hover/active states)
- Responsive: `textAlign`, `textOverflow`, `whiteSpace`, `wordBreak`

### Borders (Static)
- `borderWidth`, `borderColor`, `borderStyle`, `borderRadius`
- Individual sides: `borderTopWidth`, etc.
- Individual corners: `borderTopLeftRadius`, etc.

### Interactive (State-based)
- `cursor`, `opacity` (default, hover, active, focus, disabled states)
- `textDecoration` (default, hover, active, focus states)

## Breakpoints

- `xs`: 0px (mobile-first, default)
- `sm`: 480px
- `md`: 640px
- `lg`: 960px
- `xl`: 1280px

## Type Safety

TypeScript will autocomplete all available properties and values:

```tsx
sprinkles({
  display: 'flex', // ✓ Valid
  display: 'invalid', // ✗ TypeScript error
  gap: 4, // ✓ Valid (from spacing tokens)
  gap: 999, // ✗ TypeScript error
})
```

## Migrating from Old Utilities

### Before (styleVariants)
```tsx
import { pt, gap } from '@/styles';

<div className={`${pt[2]} ${gap[4]}`}>
```

### After (Sprinkles)
```tsx
import { sprinkles } from '@/styles';

<div className={sprinkles({ paddingTop: 2, gap: 4 })}>
```

## Benefits

- ✅ **Type-safe**: Full TypeScript autocomplete and validation
- ✅ **Zero runtime**: Compiled to static CSS at build time
- ✅ **Responsive**: Built-in breakpoint support
- ✅ **Interactive**: Pseudo-state support (hover, focus, etc.)
- ✅ **Tree-shakeable**: Only used utilities are included in CSS
- ✅ **Consistent**: Uses your design tokens automatically
