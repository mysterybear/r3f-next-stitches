// import dynamic from "next/dynamic"

import { ThemeToggle } from "@/components/ThemeToggle"
import { styled } from "stitches.config"

// const App = dynamic(() => import("@/components/App"), { ssr: false })

const Container = styled("div", {
  position: "fixed",
  height: "100%",
  width: "100%",
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
{
  /* <App /> */
}

export default IndexPage
