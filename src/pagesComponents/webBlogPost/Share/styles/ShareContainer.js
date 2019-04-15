import styled from 'styled-components'
import { Text } from 'atti-components'

const ShareContainer = styled(Text)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  text-align: center;
  margin: 50px auto 10px auto;
  background-color: ${({ theme }) => theme.colors.lighterNeutral};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
    padding: 20px 15px;
  }

  svg {
    width: 25px;
    height: 25px;
    fill: #1da1f2;
    margin-right: 10px;
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      margin-right: 5px;
    }
  }
`

export default ShareContainer