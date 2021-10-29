import colors from "@/lib/colors"
import { StringMap } from "@/types"
import { createStitches } from "@stitches/react"
import { map } from "fp-ts/lib/Record"
import defaultTheme from "tailwindcss/defaultTheme"

export const stitches = createStitches({
  prefix: "",
  theme: {
    colors: {
      ...colors,
      // Alias
      primary: "$gray900",
      secondary: "$gray700",
      tertiary: "$gray500",
      link: "$violet500",
      background: "$gray100",
      border: "$gray900",
    },
    space: {
      ...defaultTheme.spacing,
    },
  },
  utils: {},
  media: {
    ...map((px) => `(min-width: ${px})`)(defaultTheme.screens as StringMap),
    dark: "(prefers-color-scheme: dark)",
  },
})

export const darkTheme = stitches.createTheme({
  colors: {
    primary: "$gray100",
    secondary: "$gray200",
    tertiary: "$gray300",
    link: "$violet500",
    background: "$gray900",
    border: "$gray100",
  },
})

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches
