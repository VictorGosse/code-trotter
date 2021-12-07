import styled from 'styled-components'
import { Header2 } from 'atti-components'

const ArticleTitle = styled(Header2.withComponent('h1'))`
  margin-bottom: ${({ theme }) => theme.spaces.s0_5};
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      border-color: currentColor;
    }
    &:visited {
      color: ${({ theme }) => theme.components.link.colors.textVisited};
    }
  }
`

export default ArticleTitle
