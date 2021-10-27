import { ThemeProvider } from "next-themes"
import { AppProps } from "next/app"
import { darkTheme } from "stitches.config"
import globalStyles from "../styles/globalStyles"

function App({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        dark: darkTheme.className,
        light: "light",
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
