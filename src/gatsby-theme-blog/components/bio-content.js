import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default () => (
  <Fragment>
    Personal Blog by <Styled.a href="https://wangshenwei.com/">Shenwei Wang</Styled.a>.
    <br />
    Coding. Hiking. Biking. Enjoying.
  </Fragment>
)
