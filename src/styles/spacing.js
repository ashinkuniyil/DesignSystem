const createSpacing = (base = 2) => ({
  xs: base,
  sm: base * 2,
  md: base * 3,
  lg: base * 4,
  xl: base * 5,
  xxl: base * 6,
  '3xl': base * 8,
  '4xl': base * 10,
  '5xl': base * 12,
  '6xl': base * 16,
  '7xl': base * 20,
  '8xl': base * 30,
  '9xl': base * 40,
  '10xl': base * 60,
});

const spacing = createSpacing();

export default spacing;
