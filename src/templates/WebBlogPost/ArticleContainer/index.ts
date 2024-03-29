import styled from 'styled-components'
import { Container } from '@designSystem'

const ArticleContainer = styled(Container.withComponent('article'))`
  padding-top: ${({ theme }) => theme.spaces.s4};

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    padding-top: ${({ theme }) => theme.spaces.s4};
  }
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
