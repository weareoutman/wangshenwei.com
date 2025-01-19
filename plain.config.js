// @ts-check

/** @type {import("plain-blog").SiteConfig} */
export default {
  site: {
    title: "WeAreOutMan",
    description: "Personal blog of Shenwei Wang",
    url: "https://www.wangshenwei.com",
    favicon: "src/assets/avatar.png",
  },
  posts: {
    path: "src/posts",
  },
  components: {
    Article: "src/components/Article.jsx",
    Home: "src/components/Home.jsx",
  },
  styles: [
    "~prism-themes/themes/prism-vsc-dark-plus.css",
    "src/styles/global.css",
  ],
}
