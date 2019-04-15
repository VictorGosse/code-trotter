import styled from 'styled-components'

const BioContainer = styled('div')`
  display: flex;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 50px auto 10px auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

export default BioContainer