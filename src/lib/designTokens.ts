/* ══════════════════════════════════════════════════════════
   DESIGN TOKENS
   Centralized color palette and design constants
══════════════════════════════════════════════════════════ */

export const colors = {
  // Primary colors
  cyan: "#00D8D6",
  navy: "#0d2a3a",
  blue: "#00224C",
  cream: "#f5f2ed",
  creamborder: "#e8e4dc",

  // Text colors on blue (#00224C) background
  textPrimary: "#ffffff",   // 15.75:1 contrast ✅
  textAccent: "#00D8D6",    // 8.85:1 contrast ✅
  textMuted: "#7be8e8",     // 4.65:1 contrast ✅

  // Text colors on navy (#0d2a3a) background
  onNavyPrimary: "#ffffff", // 14.90:1 contrast ✅
  onNavyAccent: "#00D8D6",  // 8.37:1 contrast ✅

  // Text colors on cyan (#00D8D6) background
  onCyanPrimary: "#00224C", // 8.85:1 contrast ✅
  onCyanMuted: "#0d2a3a",   // 8.37:1 contrast ✅

  // Borders
  borderPage: "rgba(0,216,214,0.12)",
  borderCard: "rgba(0,216,214,0.15)",

  // Decorative
  ghost: "rgba(0,216,214,0.05)",
} as const;

export const accentBars = {
  navy: colors.navy,
  cyan: colors.cyan,
  blue: colors.blue,
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export type AccentColor = keyof typeof accentBars;
