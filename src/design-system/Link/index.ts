import styled, { css } from 'styled-components'

import { lightenDarken } from '../helpers'
import { Text } from '../Typographies'

const Link = styled(Text.withComponent('a'))`
  ${({ theme }) => css`
    border-bottom: 1px solid transparent;
    color: ${theme.components.link.color};
    text-decoration: none;
    &:hover {
      color: ${lightenDarken(theme.components.link.color, 10)};
      border-color: currentColor;
    }
    &:visited {
      color: ${theme.components.link.colorVisited};
    }
  `}
`

export default Link
