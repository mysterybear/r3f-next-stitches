import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { css } from "stitches.config"

const toggleButton = css({ backgroundColor: "black", color: "white" })

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light"

    setTheme(targetTheme)
  }

  return (
    <button className={toggleButton()} onClick={toggleTheme}>
      {resolvedTheme}
    </button>
  )
}
