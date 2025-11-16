import { globalStyle } from '@vanilla-extract/css';
import { colors, fontFamily, fontSize, fontWeight, lineHeight, spacing } from '../tokens';

/**
 * Global CSS reset and base styles
 * Using raw tokens instead of theme contract to avoid CSS variable scoping issues
 */

// Modern CSS reset
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
  margin: 0,
  padding: 0,
});

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
  textSizeAdjust: '100%',
  lineHeight: lineHeight.normal,
});

globalStyle('body', {
  fontFamily: fontFamily.sans,
  fontSize: fontSize.base,
  fontWeight: fontWeight.normal,
  lineHeight: lineHeight.normal,
  color: colors.neutral.gray900,
  backgroundColor: colors.neutral.white,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.bold,
  lineHeight: lineHeight.tight,
  color: colors.neutral.gray900,
});

globalStyle('h1', {
  fontSize: fontSize['4xl'],
});

globalStyle('h2', {
  fontSize: fontSize['3xl'],
});

globalStyle('h3', {
  fontSize: fontSize['2xl'],
});

globalStyle('h4', {
  fontSize: fontSize.xl,
});

globalStyle('h5', {
  fontSize: fontSize.lg,
});

globalStyle('h6', {
  fontSize: fontSize.base,
});

globalStyle('p', {
  marginBottom: spacing[6],
});

globalStyle('a', {
  color: colors.brand.primary,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
});

globalStyle('a:hover', {
  color: colors.brand.primaryDark,
});

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
});

globalStyle('button, input, textarea, select', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
});

globalStyle('button', {
  cursor: 'pointer',
  border: 'none',
  background: 'none',
});

globalStyle('ul, ol', {
  listStyle: 'none',
});

globalStyle('code, kbd, samp, pre', {
  fontFamily: fontFamily.mono,
});
