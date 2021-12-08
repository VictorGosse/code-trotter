import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

import { Text } from '@designSystem'

const NewLink = styled(Text.withComponent(Link))`
  ${({ theme }) => css`
    color: ${theme.components.link.color};
    text-decoration: none;
    border-bottom: 1px solid transparent;
  `}

  /* &:hover {
    border-color: ${({ theme }) => theme.components.link.colors.border};
  } */
  &:visited {
    color: ${({ theme }) => theme.components.link.colorVisited};
  }
`

export default NewLink
