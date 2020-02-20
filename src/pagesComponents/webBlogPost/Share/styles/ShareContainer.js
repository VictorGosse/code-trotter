import styled from 'styled-components'
import { Text } from 'atti-components'

const ShareContainer = styled(Text)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  text-align: center;
  margin: ${({ theme }) => theme.spaces.s4} auto ${({ theme }) => theme.spaces.s0_75} auto;
  background-color: ${({ theme }) => theme.shareBackground};
  padding: ${({ theme }) => theme.spaces.s1_5};
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
    padding: ${({ theme }) => theme.spaces.s1_5} ${({ theme }) => theme.spaces.s1};
  }

  svg {
    width: 25px;
    height: 25px;
    fill: #1da1f2;
    margin-right: ${({ theme }) => theme.spaces.s0_75};
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      margin-right: ${({ theme }) => theme.spaces.s0_25};
    }
  }
`

export default ShareContainer
