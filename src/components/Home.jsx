import { useSiteContext } from "plain-blog/SiteContext";
import Header from "./Header.jsx";
import Page from "./Page.jsx";
import Footer from "./Footer.jsx";
import dateFormatter from "./date-formatter.js";

/**
 * @param {import("plain-blog").HomeProps} props
 * @returns {import("react").JSX.Element}
 */
export default function Home({ posts }) {
  const { site, meta } = useSiteContext();

  return (
    <Page title={site.title} meta={meta}>
      <Header type="home" />
      <main className="home">
        {posts.map((post, index) => (
          <section key={index}>
            <h2>
              <a href={post.url}>{post.title}</a>
            </h2>
            {post.date && <p className="post-date">{dateFormatter.format(new Date(post.date))}</p>}
            {post.summary && (
              <article>
                <p>{post.summary}</p>
              </article>
            )}
          </section>
        ))}
      </main>
      <Footer type="home" />
    </Page>
  )
}
