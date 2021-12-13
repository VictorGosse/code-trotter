import styled from 'styled-components'

const BreadcrumbContainer = styled('div')`
  width: ${({ theme }) => theme.travelBlogPostWidth};
  margin: auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

export default BreadcrumbContainer
