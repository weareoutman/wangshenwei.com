// @ts-check

/** @type {import("plain-blog").SiteConfig} */
export default {
  site: {
    title: "WeAreOutMan",
    description: "Personal blog by Shenwei Wang",
    url: "https://www.wangshenwei.com",
    favicon: "assets/avatar.png",
  },
  locales: ["zh-Hans-CN", "en-US"],
  components: {
    Article: "src/components/Article.jsx",
    Home: "src/components/Home.jsx",
  },
  styles: [
    "src/styles/global.css",
  ],
  scripts: [
    "src/client/index.js",
  ],
}
