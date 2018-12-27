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
    secondary: '#6777F2',
    tertiary: '#E16A3E',
  }
}

export default otherTheme