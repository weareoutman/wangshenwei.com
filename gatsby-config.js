module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png",
        legacy: false
      }
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `WeAreOutMan`,
    author: `Shenwei Wang`,
    description: `Personal Blog by Shenwei Wang`,
    social: [
      {
        name: `github`,
        url: `https://github.com/weareoutman`,
      },
    ],
  },
}
