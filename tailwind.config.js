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
        bg: "#0F0F0F",
        primary: "#F94024",
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
