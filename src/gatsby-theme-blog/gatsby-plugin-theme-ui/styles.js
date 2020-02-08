import merge from "deepmerge"
import defaultThemeStyles from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/styles"

export default merge(defaultThemeStyles, {
  pre: {
    p: 2
  },
  blockquote: {
    paddingX: 3,
    marginX: 0,
    borderLeft: `5px solid #ccc`,
    footer: {
      opacity: 0.6
    }
  }
})
