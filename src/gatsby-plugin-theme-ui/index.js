// import darkTheme from '@theme-ui/preset-deep';

export default {
  // useColorSchemeMediaQuery: true,
  // useLocalStorage: false,
  // colors: {
  //   modes: {
  //     dark: {
  //       ...darkTheme.colors
  //     }
  //   }
  // },
  fonts: {
    body: `'Merriweather','Georgia',serif`,
    heading: `Montserrat,sans-serif`,
  },
  lineHeights: {
    body: 1.75
  },
  maxWidth: {
    container: 704
  },
  styles: {
    root: {
      fontSize: 2
    },
    pre: {
      padding: 3,
      marginBottom: 3,
      marginX: -3,
      borderRadius: "10px",
    },
    code: {
      color: '#9cdcfe'
    },
    p: {
      marginY: 4
    },
    blockquote: {
      paddingX: 4,
      marginX: 0,
      borderLeft: `5px solid #ccc`,
      opacity: "0.8",
      footer: {
        opacity: 0.6
      }
    },
  },
  prism: {
    ".property": {
      color: "inherit",
    },
  },
}
