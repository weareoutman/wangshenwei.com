module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-158375679-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional optional fields
        // sampleRate: 5,
        siteSpeedSampleRate: 33,
        // cookieDomain: "wangshenwei.com",
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        preset: "@theme-ui/preset-swiss",
        prismPreset: "vs-dark",
        webfontURL: `https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@700;900&display=swap`,
      },
    },
    // `gatsby-theme-blog-darkmode`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/images/favicon.png",
        legacy: false
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `WeAreOutMan`,
    author: `Shenwei Wang`,
    description: `Personal Blog by Shenwei Wang`,
    siteUrl: `https://wangshenwei.com`,
    social: [
      {
        name: `github`,
        url: `https://github.com/weareoutman`,
      },
    ]
  },
}
