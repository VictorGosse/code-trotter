import { theme } from 'atti-components'

const otherTheme = {
  travelBlogPostWidth: '70%',
  webBlogPost: {
    basicWidth: '50%',
    extendedWidth: '70%',
  },
  ...theme,
  colors: {
    ...theme.colors,
    secondary: '#4E5FE0',
    tertiary: '#cf4410',
  }
}

export default otherTheme