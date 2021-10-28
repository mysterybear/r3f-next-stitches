import { Canvas } from "@react-three/fiber"
import { styled } from "stitches.config"
import "../materials/BasicShaderMaterial"
import Earth from "./Earth"

const FullScreenDiv = styled("div", {
  position: "fixed",
  height: "100%",
  width: "100%",
  "& canvas": {
    touchAction: "none",
  },
})

const App = () => {
  return (
    <FullScreenDiv>
      <Canvas>
        <Earth />
      </Canvas>
    </FullScreenDiv>
  )
}

export default App
