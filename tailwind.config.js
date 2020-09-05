const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Barlow Condensed", ...defaultTheme.fontFamily.sans],
        secondary: ["Space Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        bg: "#000000",
        primary: "#05B7FF",
        secondary: "#C0C514",
        body: "#CBCBCB",
      },
      maxWidth: (theme, { breakpoints }) => ({
        contentMax: "68.75rem",
        ...breakpoints(theme("screens")),
      }),
    },
  },
  variants: {},
  plugins: [],
};
