import { globalCss } from "stitches.config"
import { globalStyles } from "twin.macro"

const customStyles = {}

const styles = () => {
  globalCss({ ...customStyles, ...globalStyles })()
}

export default styles
