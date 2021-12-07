import styled from 'styled-components'

const CategoryContainer = styled('div')`
  height: 100vh;
  position: relative;

  a {
    color: currentColor;
    text-decoration: none;
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 950px;
  }
`

export default CategoryContainer
