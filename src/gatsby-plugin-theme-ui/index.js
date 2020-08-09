import darkTheme from '@theme-ui/preset-deep';
import lightTheme from '@theme-ui/preset-swiss';

export default {
  // useColorSchemeMediaQuery: true,
  // useLocalStorage: false,
  colors: {
    "inline-code": lightTheme.colors.secondary,
    modes: {
      dark: {
        // ...darkTheme.colors
        text: darkTheme.colors.text,
        background: darkTheme.colors.background,
        muted: darkTheme.colors.muted,
        primary: 'rgb(242, 95, 92)',
        secondary: lightTheme.colors.primary,
        "inline-code": darkTheme.colors.secondary,
      }
    }
  },
  fonts: {
    body: `'Merriweather','Georgia',serif`,
    heading: `Montserrat,sans-serif`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64],
  lineHeights: {
    body: 1.75
  },
  sizes: {
    container: 704
  },
  styles: {
    root: {
      fontSize: 2
    },
    h2: {
      fontSize: [4, 5]
    },
    h3: {
      fontSize: [3, 4]
    },
    h4: {
      fontSize: [2, 3]
    },
    h5: {
      fontSize: [1, 2]
    },
    a: {
      textDecoration: "none",
      boxShadow: "0 1px 0 0 currentColor"
    },
    pre: {
      padding: 3,
      marginBottom: 4,
      marginX: -3,
    },
    code: {
      color: '#9cdcfe'
    },
    inlineCode: {
      color: 'inline-code',
      paddingX: '3px'
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
    ".property,.title,.important,.boolean": {
      color: "inherit",
    },
  },
}
