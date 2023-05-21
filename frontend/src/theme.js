// color design tokens export
export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#333333",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#00D5FA",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  },
  blueGrey: {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    300: "#90a4ae",
    400: "#78909c",
    500: "#607d8b",
    600: "#546e7a",
    700: "#455a64",
    800: "#37474f",
    900: "#263238",
    A100: "#cfd8dc",
    A200: "#b0bec5",
    A400: "#78909c",
    A700: "#455a64",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[600],
            },
            neutral: {
              toggleOne: colorTokens.grey[1000],
              dark: colorTokens.grey[100],
              main: colorTokens.grey[300],
              mediumMain: colorTokens.grey[300],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[400],
              darkGrey: colorTokens.grey[600],
              toggleTwo: colorTokens.grey[0],
              toggleThree: colorTokens.grey[0],
              toggleTextGrey: colorTokens.grey[100],
              toggleTextDark: colorTokens.grey[600],
              toggleTextInput: colorTokens.grey[1000],
            },
            background: {
              default: colorTokens.grey[500],
              alt: colorTokens.grey[800],
              light: colorTokens.grey[100],
              mediumLight: colorTokens.grey[0],
              mediumGrey: colorTokens.grey[200],
              medium: colorTokens.grey[300],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[600],
              light: colorTokens.primary[50],
            },
            neutral: {
              toggleOne: colorTokens.grey[0],
              dark: colorTokens.grey[700],
              main: colorTokens.grey[600],
              mediumMain: colorTokens.grey[400],
              medium: colorTokens.grey[300],
              light: colorTokens.grey[50],
              darkGrey: colorTokens.grey[600],
              toggleTwo: colorTokens.grey[1000],
              toggleThree: colorTokens.grey[800],
              toggleTextGrey: colorTokens.grey[600],
              toggleTextDark: colorTokens.grey[600],
              toggleTextInput: colorTokens.grey[800],
            },
            background: {
              default: colorTokens.grey[100],
              alt: colorTokens.grey[10],
              light: colorTokens.grey[50],
              mediumLight: colorTokens.grey[100],
              mediumGrey: colorTokens.grey[200],
              medium: colorTokens.grey[300],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
