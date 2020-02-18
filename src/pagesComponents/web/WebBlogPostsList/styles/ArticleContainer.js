import styled from 'styled-components'

const ArticleContainer = styled('article')`
  margin: ${({ theme }) => theme.spaces.s2} 0;
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
`

export default ArticleContainer
