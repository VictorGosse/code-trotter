import styled from 'styled-components'
import { Header1 } from 'atti-components'

const ArticleTitle = styled(Header1)`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  &:after {
    content: ' ';
    display: block;
    width: 150px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.black};
    margin: 35px auto;
  }
`

export default ArticleTitle