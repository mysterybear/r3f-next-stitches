import { createStitches } from "@stitches/react"
import { map } from "fp-ts/lib/Record"
import tailwindColors from "tailwindcss/colors"
import defaultTheme from "tailwindcss/defaultTheme"

type FlatMap = Record<string, string>
type StringPair = [string, string]
type TailwindColors = typeof tailwindColors

const { entries, fromEntries } = Object

const flattenTailwindColors = (colors: TailwindColors): FlatMap => {
  const flatten_ = (colors: TailwindColors, prefix = "") =>
    entries(colors).flatMap(([name, colorValue]): StringPair[] =>
      typeof colorValue == "string"
        ? [[prefix + name, colorValue]]
        : flatten_(colorValue, prefix + name)
    )
  return fromEntries(flatten_(colors))
}

export const stitches = createStitches({
  prefix: "",
  theme: {
    colors: {
      ...flattenTailwindColors(tailwindColors),
      // Alias
      primary: "$gray900",
      secondary: "$gray700",
      tertiary: "$gray500",
      link: "$blue500",
      background: "$gray100",
      border: "$gray900",
    },
    space: {
      ...defaultTheme.spacing,
    },
  },
  utils: {},
  media: {
    ...map((px) => `(min-width: ${px})`)(defaultTheme.screens as FlatMap),
    dark: "(prefers-color-scheme: dark)",
  },
})

export const darkTheme = stitches.createTheme({
  colors: {
    primary: "$gray100",
    secondary: "$gray200",
    tertiary: "$gray300",
    link: "$blue500",
    background: "$gray900",
    border: "$gray100",
  },
})

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches
