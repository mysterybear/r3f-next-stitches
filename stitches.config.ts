import { createStitches } from "@stitches/react"
import { map } from "fp-ts/lib/ReadonlyRecord"
import tailwindConfig from "./tailwind.config"

type FlatMap = Record<string, string>
type StringPair = [string, string]
type TailwindColors = typeof tailwindConfig.theme.colors

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
      ...flattenTailwindColors(tailwindConfig.theme.colors),
      // Alias
      primary: "$gray900",
      secondary: "$gray700",
      tertiary: "$gray500",
      link: "$blue500",
      background: "$gray50",
      border: "$gray900",
    },
    space: tailwindConfig.theme.spacing,
  },
  utils: {},
  media: {
    ...map((px) => `(min-width: ${px})`)(
      tailwindConfig.theme.screens as FlatMap
    ),
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
