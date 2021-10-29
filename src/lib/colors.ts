import { StringMap, StringPair } from "@/types"
import { pipe } from "fp-ts/lib/function"
import { filterWithIndex } from "fp-ts/lib/ReadonlyRecord"
import tailwindColors from "tailwindcss/colors"
import { TAILWIND_COLOR_SELECTION } from "~/constants"

type TailwindColors = typeof tailwindColors

const { entries, fromEntries } = Object

const flattenTailwindColors = (colors: TailwindColors): StringMap => {
  const flatten_ = (colors: TailwindColors, prefix = "") =>
    entries(colors).flatMap(([name, colorValue]): StringPair[] =>
      typeof colorValue == "string"
        ? [[prefix + name, colorValue]]
        : flatten_(colorValue, prefix + name)
    )
  return fromEntries(flatten_(colors))
}

const adjustTailwindColors = (input: TailwindColors): TailwindColors => ({
  ...input,
  gray: input.coolGray,
})

export default pipe(
  tailwindColors,
  adjustTailwindColors,
  flattenTailwindColors,
  filterWithIndex((k) => TAILWIND_COLOR_SELECTION.includes(k))
)
