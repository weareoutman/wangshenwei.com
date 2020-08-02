/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export default function SlideStart({ text }) {
  const start = () => {
    window.dispatchEvent(new CustomEvent("slide.start"))
  }

  return (
    <Styled.p css={{
      textAlign: "center"
    }}>
      <Styled.a
        role="button"
        onClick={start}
      >
        { text }
      </Styled.a>
    </Styled.p>
  )
}
