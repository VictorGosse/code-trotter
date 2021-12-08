import { Theme } from 'styled-components'

import theme from './theme'

const defaultTheme: Theme = {
  ...theme,
  components: {
    ...theme.components,
    link: {
      ...theme.components.link,
      colorVisited: '#8b12e6',
    },
  },
}

export default defaultTheme
