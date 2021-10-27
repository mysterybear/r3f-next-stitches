const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  theme: {
    colors,
    spacing: {
      ...defaultTheme.spacing,
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  plugins: [],
  darkMode: "media",
}
