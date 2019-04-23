import styled from 'styled-components'

const BioContainer = styled('div')`
  display: flex;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: ${({ theme }) => `${theme.spaces.s3} auto ${theme.spaces.s0_75} auto`};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

export default BioContainer