export const COLORS = {
  primary: "#da3040",
  secondary: "#4D626C",

  white: "#FFF",
  gray: "#74858C",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 22,
  extraLarge: 42,
};

export const FONTS = {
  bold: "RalewayBold",
  semiBold: "RalewaySemiBold",
  medium: "RalewayMedium",
  regular: "RalewayRegular",
  light: "RalewayLight",
  InterBold: "InterBold",
  InterSemiBold: "InterSemiBold",
  InterMedium: "InterMedium",
  InterRegular: "InterRegular",
  InterLight: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
