
import { useSiteContext } from "plain-blog/SiteContext";
import Bio from "./Bio.jsx";

export default function Header(props) {
  const { baseUrl, site } = useSiteContext();

  return (
    props.type === "home"
    ? (
      <header className="page-header home">
        <h1><a href={baseUrl}>{site.title}</a></h1>
        <Bio />
      </header>
    ) : (
      <header className="page-header">
        <a href={baseUrl}>{site.title}</a>
      </header>
    )
  );
}
