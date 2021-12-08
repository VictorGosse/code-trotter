import { Theme } from 'styled-components'

import theme from './theme'

const defaultThemeDark: Theme = {
  ...theme,
  appBackground: '#282c35',
  components: {
    ...theme.components,
    link: {
      ...theme.components.link,
      colorVisited: '#5c8cbd',
    },
  },
}

export default defaultThemeDark
