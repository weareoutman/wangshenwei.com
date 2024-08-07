/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { jsx, css, Styled } from "theme-ui"
import Bio from "gatsby-theme-blog/src/components/bio"
import { SkipNavLink } from "@reach/skip-nav"
import ColorModeSwitch from "../../components/color-mode-switch"

const rootPath = `${__PATH_PREFIX__}/`

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    )
  } else {
    return (
      <Styled.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Styled.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h3>
    )
  }
}

const Header = ({ children, title, ...props }) => (
  <header>
    <Helmet>
      <meta property="og:image" content="https://www.wangshenwei.com/static/2b467d8e9e1c0d3a8662ef8c8a223a18/88b72/avatar.png" />
    </Helmet>
    <SkipNavLink sx={{ variant: `styles.a` }} />
    <div
      css={css({
        maxWidth: `container`,
        mx: `auto`,
        px: 3,
        pt: 4,
      })}
    >
      <div
        css={css({
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          mb: props.location.pathname === rootPath ? 4 : 2,
        })}
      >
        <Title {...props}>{title}</Title>
        <ColorModeSwitch />
        {children}
      </div>
      {props.location.pathname === rootPath && <Bio />}
    </div>
  </header>
)

export default Header
