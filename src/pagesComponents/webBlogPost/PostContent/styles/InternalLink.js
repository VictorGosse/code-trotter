import styled from 'styled-components'
import Link from 'gatsby-link'
import { Text } from 'atti-components'

const InternalLink = styled(Text.withComponent(Link))`
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
  color: ${({ theme }) => theme.components.link.colors.text};
  text-decoration: none;
  border-bottom: ${({ theme }) => theme.components.link.borders.width} solid
    transparent;

  &:hover {
    border-color: ${({ theme }) => theme.components.link.colors.border};
  }
`

export default InternalLink
