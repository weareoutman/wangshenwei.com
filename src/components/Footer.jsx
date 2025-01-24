import Bio from "./Bio.jsx";
import ColorModeSwitchLoader from "./ColorModeSwitchLoader.jsx";

export default function Footer(props) {
  return (
    <>
      {props.type === "home"
      ? (
        <footer className="page-footer home">
          © {new Date().getFullYear()} • Built with <a href="https://github.com/weareoutman/plain-blog">
            Plain Blog
          </a> • <a href="https://github.com/weareoutman">
            GitHub
          </a>
        </footer>
      ) : (
        <footer className="page-footer">
          <hr />
          <Bio />
        </footer>
      )}
      {/* Put things with client-side scripts at last */}
      <ColorModeSwitchLoader />
    </>
  );
}
