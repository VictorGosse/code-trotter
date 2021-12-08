import { Theme } from 'styled-components'

import theme from './theme'

const webThemeDark: Theme = {
  ...theme,
  components: {
    ...theme.components,
    header1: {
      color: '#9980fa',
    },
    header2: {
      ...theme.components.header2,
      lineHeight: '1.2em',
    },
    link: {
      ...theme.components.link,
      colorVisited: '#12cbc4',
    },
    text: {
      ...theme.components.text,
      fontSize: '18px',
      lineHeight: '32px',
    },
  },
  shareBackground: '#232323',
}

export default webThemeDark
