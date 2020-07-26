/** @jsx jsx */
import { jsx, css, useColorMode, Styled } from "theme-ui"

function ColorModeSwitch() {
  const [colorMode, setColorMode] = useColorMode()
  const toggleColorMode = (e) => {
    setColorMode(mode => mode === `dark` ? `light` : `dark`)
  }

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
