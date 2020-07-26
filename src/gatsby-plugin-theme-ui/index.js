import darkTheme from '@theme-ui/preset-deep';
import lightTheme from '@theme-ui/preset-swiss';

export default {
  useColorSchemeMediaQuery: true,
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
    pre: {
      padding: 3,
      marginBottom: 3,
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
    ".property,.title,.important": {
      color: "inherit",
    },
  },
}
