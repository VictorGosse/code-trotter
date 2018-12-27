import styled from 'styled-components'
import { Header2 } from 'atti-components'

const ArticleTitle = styled(Header2.withComponent('h1'))`
  margin-bottom: 10px;
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &:hover, &:visited, &:focus, &:active {
      color: ${({ theme }) => theme.colors.secondary};
      border-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`

export default ArticleTitle