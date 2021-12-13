import styled from 'styled-components'
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image'

const Image = styled(GatsbyImage)<GatsbyImageProps>`
  width: 120%;
  margin-left: -10%;
  margin-top: ${({ theme }) => theme.spaces.s1_5};
  height: auto;
  object-fit: cover;
  display: block;
  > span {
    display: block;
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
    margin-left: 0;
  }
`

export default Image
