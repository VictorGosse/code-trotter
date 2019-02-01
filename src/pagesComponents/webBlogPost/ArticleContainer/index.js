import styled from 'styled-components'
import { Container } from 'atti-components'

const ArticleContainer = styled(Container.withComponent('article'))`
  margin-top: 65px;
  pre {
    width: ${({ theme }) => theme.webBlogPost.basicWidth};
    margin: 25px auto 25px auto;
    border-radius: 0.3em;
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
    }
  }
`

export default ArticleContainer