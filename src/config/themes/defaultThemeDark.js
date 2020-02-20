const defaultThemeDark = {
  colors: {
    primary: '#84c1ff',
    secondary: '#1129d8',
    tertiary: '#cf4410',
    black: 'rgba(255, 255, 255, 0.88)',
    lightBlack: 'rgba(255, 255, 255, 0.88)',
  },
  components: {
    header1: {
      fonts: {
        fontSize: '48px',
      }
    },
    header2: {
      fonts: {
        fontSize: '34px',
      },
    },
    link: {
      colors: {
        border: 'transparent',
        borderHover: 'currentColor',
        textVisited: '#5c8cbd',
      }
    }
  },
  layout: {
    mobile: {
      padding: 's2',
    }
  },

  // Custom
  appBackground: '#282c35',
  travelBlogPostWidth: '70%',
  webBlogPost: {
    basicWidth: '50%',
    extendedWidth: '70%',
  },
}

export default defaultThemeDark
