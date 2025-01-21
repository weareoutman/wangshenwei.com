import { useSiteContext } from "plain-blog/SiteContext";
import Header from "./Header.jsx";
import Page from "./Page.jsx";
import Footer from "./Footer.jsx";
import dateFormatter from "./date-formatter.js";

/**
 * @param {import("plain-blog").HomeProps} props
 * @returns {import("react").JSX.Element}
 */
export default function Home({ articles }) {
  const { site, meta } = useSiteContext();

  return (
    <Page title={site.title} meta={meta}>
      <Header type="home" />
      <main className="home">
        {articles.map((article, index) => (
          <section key={index}>
            <h2>
              <a href={article.url}>{article.title}</a>
            </h2>
            {article.date && <p className="post-date">{dateFormatter.format(new Date(article.date))}</p>}
            {article.summary && (
              <article>
                <p>{article.summary}</p>
              </article>
            )}
          </section>
        ))}
      </main>
      <Footer type="home" />
    </Page>
  )
}
