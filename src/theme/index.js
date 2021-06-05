export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
};

export const FONTS = {
  largeTitle: { fontSize: SIZES.largeTitle },
  h1: { fontSize: SIZES.h1 },
  h2: { fontSize: SIZES.h2 },
  h3: { fontSize: SIZES.h3 },
  h4: { fontSize: SIZES.h4 },
  body1: { fontSize: SIZES.body1 },
  body2: { fontSize: SIZES.body2 },
  body3: { fontSize: SIZES.body3 },
  body4: { fontSize: SIZES.body4 },
  body5: { fontSize: SIZES.body5 },
};

const appTheme = { SIZES, FONTS };

export default appTheme;
