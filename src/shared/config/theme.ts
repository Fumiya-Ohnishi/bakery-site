export const theme = {
  colors: {
    cream: '#FFF8F0',
    creamDark: '#F5EDD8',
    creamBorder: '#E8D9C0',
    brownLight: '#D4A574',
    brown: '#A67C52',
    brownDark: '#5C3D2E',
    terracotta: '#C1624F',
    terracottaLight: '#D9846F',
    terracottaPale: '#F2D0C8',
    green: '#7A9E7E',
    greenLight: '#A8C5AC',
    greenPale: '#DCE8DC',
    warmWhite: '#FFFDF8',
    text: '#3D2B1F',
    textMuted: '#7A6356',
    textLight: '#A89486',
  },
  fonts: {
    serifJa: "'Shippori Mincho', serif",
    sansJa: "'Noto Sans JP', sans-serif",
    serifEn: "'Playfair Display', serif",
  },
} as const

export type Theme = typeof theme
