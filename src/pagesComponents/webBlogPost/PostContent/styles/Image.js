import styled from 'styled-components'
import Img from 'gatsby-image'

const Image = styled(Img)`
  width: 120%;
  margin-left: -10%;
  margin-top: 25px;
  height: auto;
  object-fit: cover;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-left: 0;
  }
`

export default Image