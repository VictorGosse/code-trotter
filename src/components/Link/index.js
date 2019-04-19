import styled from 'styled-components'
import TransitionLink from 'gatsby-plugin-transition-link'

import { Text } from 'atti-components'

const NewLink = styled(Text.withComponent(TransitionLink))`
  color: ${({ theme }) => theme.components.link.colors.text};
  text-decoration: none;
  border-bottom: ${({ theme }) => theme.components.link.borders.width} solid
    ${({ theme }) => theme.components.link.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.components.link.colors.borderHover};
  }
`

export default NewLink
