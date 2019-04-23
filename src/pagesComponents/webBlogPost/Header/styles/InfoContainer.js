import styled from 'styled-components'

const InfoContainer = styled('div')`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: ${({ theme }) => theme.spaces.s2} auto ${({ theme }) => theme.spaces.s1_5} auto; 
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

export default InfoContainer