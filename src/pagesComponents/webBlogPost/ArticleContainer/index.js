import styled from 'styled-components'
import { Container } from 'atti-components'

const ArticleContainer = styled(Container.withComponent('article'))`
  margin-top: 65px;
  pre {
    width: ${({ theme }) => theme.webBlogPost.extendedWidth};
    margin: 35px auto 10px auto;
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
    }
  }
`

export default ArticleContainer