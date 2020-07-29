import React from "react"
import { Styled, css } from "theme-ui"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
    {` & `}
    <Styled.a href="https://aws.amazon.com/amplify/">AWS Amplify</Styled.a>
    {` `}&bull;{` `}
    <Styled.a href="https://github.com/weareoutman">github</Styled.a>
  </footer>
)

export default Footer
