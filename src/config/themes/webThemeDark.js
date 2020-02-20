const webThemeDark = {
  colors: {
    primary: '#12cbc4',
    secondary: '#9980fa',
    tertiary: '#ffc312',
    black: 'rgba(255, 255, 255, 0.88)',
    lightBlack: 'rgba(255, 255, 255, 0.88)',
  },
  components: {
    header1: {
      colors: {
        text: '#9980fa'
      },
      fonts: {
        fontSize: '48px',
      }
    },
    header2: {
      fonts: {
        fontSize: '34px',
        lineHeight: '1.2em',
      },
    },
    link: {
      colors: {
        border: 'transparent',
        borderHover: 'currentColor',
        textVisited: '#12cbc4',
      }
    },
    text: {
      normal: {
        fonts: {
          lineHeight: '32px',
        }
      }
    }
  },
  fonts: {
    fontSize: {
      fs16: '18px'
    }
  },
  layout: {
    mobile: {
      padding: 's2',
    }
  },

  // Custom
  appBackground: 'white',
  travelBlogPostWidth: '70%',
  shareBackground: '#232323',
  webBlogPost: {
    basicWidth: '50%',
    extendedWidth: '70%',
  },
}

export default webThemeDark
