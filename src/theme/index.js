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
  largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle },
  h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1 },
  h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2 },
  h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3 },
  h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4 },
  body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1 },
  body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2 },
  body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3 },
  body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4 },
  body5: { fontFamily: "Roboto-Regular", fontSize: SIZES.body5 },
};

const appTheme = { SIZES, FONTS };

export default appTheme;
