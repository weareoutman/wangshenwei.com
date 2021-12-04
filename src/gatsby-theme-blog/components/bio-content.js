import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

export default () => (
  <Fragment>
    Personal Blog by <Styled.a as={Link} to="/">Shenwei Wang</Styled.a>.
    <br />
    Writing code, raising kid, exploring the world.
  </Fragment>
)
