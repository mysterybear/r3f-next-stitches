import { createStitches } from "@stitches/react"
import { map } from "fp-ts/lib/ReadonlyRecord"
import tailwindConfig from "./tailwind.config"

export const stitches = createStitches({
  prefix: "",
  theme: {},
  utils: {},
  media: map((px) => `(min-width: ${px})`)(tailwindConfig.theme.screens),
})

export const { css, styled, globalCss, theme, keyframes, getCssText } = stitches
