import styled from 'styled-components'
import Link from 'gatsby-link'
import { Text } from '@designSystem'

const InternalLink = styled(Text.withComponent(Link))`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.components.link.color};
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: currentColor;
  }
`

export default InternalLink
