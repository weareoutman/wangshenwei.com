/** @jsx jsx */
import { Styled, jsx, Button } from "theme-ui"
import { graphql, Link } from "gatsby"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import HomeFooter from "gatsby-theme-blog/src/components/home-footer"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404 Not Found" />
      <main>
        <Styled.h1>404 Not Found</Styled.h1>
        <Styled.p>
          Oops! Something went wrong.
        </Styled.p>
        <Styled.p>
          Go back to
          {' '}
          <Styled.a as={Link} to="/">homepage</Styled.a>?
          {' '}
          Or
          {' '}
          <Styled.a
            href="https://github.com/weareoutman/wangshenwei.com/issues/new"
            target="_blank"
            rel="noopener noreferrer"
          >
              report an issue
          </Styled.a>
          .
        </Styled.p>
      </main>
      <HomeFooter />
    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
