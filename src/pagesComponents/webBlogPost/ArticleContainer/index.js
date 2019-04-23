import styled from 'styled-components'
import { Container } from 'atti-components'

const ArticleContainer = styled(Container.withComponent('article'))`
  margin-top: ${({ theme }) => theme.spaces.s4};
  pre {
    width: ${({ theme }) => theme.webBlogPost.basicWidth};
    margin: ${({ theme }) => theme.spaces.s1_5} auto ${({ theme }) => theme.spaces.s1_5} auto;
    border-radius: 0.3em;
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      width: 100%;
    }
  }
`

export default ArticleContainer