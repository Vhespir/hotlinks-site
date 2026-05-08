// HotLinks theme constants - Dark theme with neon pink accents

export const colors = {
  // Backgrounds
  background: '#0A0A0A',
  backgroundSecondary: '#1A1A1A',
  backgroundTertiary: '#2A2A2A',

  // Primary (Neon Pink)
  primary: '#FF1493',
  primaryLight: '#FF69B4',
  primaryDark: '#C71585',

  // Secondary (Spring Green)
  secondary: '#00FF7F',
  secondaryLight: '#90EE90',
  secondaryDark: '#00CD66',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#B3B3B3',
  textTertiary: '#666666',

  // Accents
  accent: '#32CD32',        // Lime green accent
  success: '#00FF88',
  warning: '#FFB800',
  error: '#FF3366',

  // Borders & Dividers
  border: '#333333',
  divider: '#1F1F1F',

  // Inputs
  inputBackground: '#1F1F1F',
  inputBorder: '#333333',
  inputBorderFocus: '#FF1493',

  // Cards
  card: '#1A1A1A',
  cardBorder: '#2A2A2A',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  round: 9999,
};

export const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const fontWeight = {
  regular: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};
