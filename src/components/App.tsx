import { Canvas } from "@react-three/fiber"
import "../materials/BasicShaderMaterial"
import Earth from "./Earth"
import FullScreen from "./FullScreen"

const App = () => {
  return (
    <FullScreen>
      <Canvas>
        <Earth />
      </Canvas>
    </FullScreen>
  )
}

export default App
