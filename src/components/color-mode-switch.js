/** @jsx jsx */
import { useEffect } from "react"
import { jsx, css, useColorMode, Styled } from "theme-ui"

function ColorModeSwitch() {
  const [colorMode, setColorMode] = useColorMode()
  const toggleColorMode = () => {
    setColorMode(mode => mode === `dark` ? `light` : `dark`)
  }

  useEffect(() => {
    document.documentElement.dataset.theme = colorMode === "dark" ? "dark" : "light"
  }, [colorMode])

  return (
    <Styled.a
      role="button"
      onClick={toggleColorMode}
      css={css({
        boxShadow: `none`,
        textDecoration: `none`,
      })}
    >
      {
        colorMode === `dark` ? "Light" : "Dark"
      }
    </Styled.a>
  )
}

export default ColorModeSwitch
