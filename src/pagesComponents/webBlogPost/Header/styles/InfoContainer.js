import styled from 'styled-components'

const InfoContainer = styled('div')`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 35px auto 25px auto; 
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export default InfoContainer