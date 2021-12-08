import styled from 'styled-components'

const ArticleContainer = styled('article')`
  margin: ${({ theme }) => theme.spaces.s2} auto;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};

  & + & {
    &:before {
      content: ' ';
      display: block;
      width: 150px;
      height: 3px;
      background-color: ${({ theme }) => theme.colors.secondary};
      margin: ${({ theme }) => theme.spaces.s2} auto;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

export default ArticleContainer
