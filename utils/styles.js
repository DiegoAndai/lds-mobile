export const COLORS = {
  pink600: '#DB2777',
  gray500: '#6B7280',
  gray800: '#1F2937',
};

export const SPACING = {
  xs: 6,
  sm: 12,
  md: 18,
  lg: 32,
  xl: 56,
};

export const TEXT_SIZES = {
  sm: 15,
  md: 20,
  lg: 30,
  xl: 40,
};

export const ICON_SIZES = {
  lg: 32,
};

export const StyleUtils = {
  fontSize: (size = 'md') => `font-size: ${TEXT_SIZES[size]}px;`,
  spaced: (size = 'md') => `margin: ${SPACING[size]}px;`,
  spacedTop: (size = 'md') => `margin-top: ${SPACING[size]}px;`,
  spacedBottom: (size = 'md') => `margin-bottom: ${SPACING[size]}px;`,
  spacedX: (size = 'md') => `margin-top: ${SPACING[size]}px; margin-bottom: ${SPACING[size]}px;`,
  padded: (size = 'md') => `padding: ${SPACING[size]}px;`,
  rounded: (size = 'md') => `border-radius: ${SPACING[size]}px;`,
};
