import dynamic from "next/dynamic"
import { ThemeToggle } from "@/components/ThemeToggle"
import { styled } from "stitches.config"
import FullScreen from "@/components/FullScreen"

const App = dynamic(() => import("@/components/App"), { ssr: false })

const Container = styled(FullScreen, {
  backgroundColor: "$background",
  color: "$primary",
})

const IndexPage = () => {
  return (
    <Container>
      <h2>hi</h2>
      <ThemeToggle />
    </Container>
  )
}

export default IndexPage
