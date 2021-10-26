import { globalCss } from "stitches.config"
import tw, { theme, globalStyles } from "twin.macro"

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const styles = () => {
  globalCss({ ...customStyles, ...globalStyles })()
}

export default styles
