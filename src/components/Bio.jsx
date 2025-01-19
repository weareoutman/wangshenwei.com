import avatar from "../assets/avatar.png";

export default function Bio() {
  return (
    <div className="bio">
      <img className="bio-avatar" src={avatar} />
      <div className="bio-content">
        Personal blog of <a href="/">Shenwei Wang</a>.
        <br />
        Writing code, raising kid, exploring the world.
      </div>
    </div>
  );
}
