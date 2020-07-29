import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"

export default () => (
  <Fragment>
    Personal Blog by <Styled.a as={Link} to="/">Shenwei Wang</Styled.a>.
    <br />
    Coding, Hiking, Biking, Enjoying.
  </Fragment>
)
