
import { useSiteContext } from "plain-blog/SiteContext";
import Bio from "./Bio.jsx";

export default function Header(props) {
  const { baseUrl, site } = useSiteContext();

  return (
    props.type === "home"
    ? (
      <header className="page-header home">
        <div className="title-container">
          <h1><a href={baseUrl}>{site.title}</a></h1>
          <color-mode-switch />
        </div>
        <Bio />
      </header>
    ) : (
      <header className="page-header">
        <a href={baseUrl}>{site.title}</a>
        <color-mode-switch />
      </header>
    )
  );
}
