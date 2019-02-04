import { theme } from 'atti-components'

const otherTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    secondary: '#2138E0',
    tertiary: '#cf4410',
  },
  components: {
    header2: {
      fonts: {
        fontSize: '34px',
      },
    },
  },
  travelBlogPostWidth: '70%',
  webBlogPost: {
    basicWidth: '50%',
    extendedWidth: '70%',
  },
}

export default otherTheme