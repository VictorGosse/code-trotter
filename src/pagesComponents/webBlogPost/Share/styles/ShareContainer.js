import styled from 'styled-components'
import { Text } from 'atti-components'

const ShareContainer = styled(Text)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  text-align: center;
  margin: 35px auto 10px auto;
  background-color: ${({ theme }) => theme.colors.smoke};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }

  svg {
    width: 25px;
    height: 25px;
    fill: #1da1f2;
    margin-right: 10px;
  }
`

export default ShareContainer