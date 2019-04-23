import styled from 'styled-components'
import Link from 'gatsby-link'

import { Text } from 'atti-components'

const NewLink = styled(Text.withComponent(Link))`
  color: ${({ theme }) => theme.components.link.colors.text};
  text-decoration: none;
  border-bottom: ${({ theme }) => theme.components.link.borders.width} solid
    ${({ theme }) => theme.components.link.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.components.link.colors.borderHover};
  }
`

export default NewLink
