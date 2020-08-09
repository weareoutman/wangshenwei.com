/** @jsx jsx */
import { Styled, jsx } from "theme-ui"
import { Link } from "gatsby"

const PostLink = ({ title, slug, date, excerpt }) => (
  <article>
    <header>
      <Styled.h2
        sx={{
          my: 1,
        }}
      >
        <Styled.a
          as={Link}
          sx={{
            textDecoration: `none`,
            boxShadow: `none`
          }}
          to={slug}
        >
          {title || slug}
        </Styled.a>
      </Styled.h2>
      <small>{date}</small>
    </header>
    <section>
      <Styled.p sx={{
        mt: 1,
        mb: 5
      }}>{excerpt}</Styled.p>
    </section>
  </article>
)

export default PostLink
