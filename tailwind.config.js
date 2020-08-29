const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        // serif: ["Butler", ...defaultTheme.fontFamily.serif],
        // sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        primary: ["Barlow", ...defaultTheme.fontFamily.sans],
        secondary: ["Space Mono", ...defaultTheme.fontFamily.mono],
        tertiary: ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bg: "#fbfbfb",
        primary: "#2f3547",
        secondary: "#fff0e5",
        accent: "#ff9982",
      },
      maxWidth: (theme, { breakpoints }) => ({
        contentMax: "68.75rem",
        ...breakpoints(theme("screens")),
      }),
    },
  },
  variants: {},
  plugins: [],
}
