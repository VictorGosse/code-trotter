import { theme } from 'atti-components'

console.log(theme)
const otherTheme = {
  travelBlogPostWidth: '70%',
  webBlogPost: {
    basicWidth: '50%',
    extendedWdith: '70%',
  },
  ...theme,
}

export default otherTheme