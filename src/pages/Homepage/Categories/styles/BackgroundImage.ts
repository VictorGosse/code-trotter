import styled from 'styled-components'
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image'

const BackgroundImage = styled(GatsbyImage)<GatsbyImageProps>`
  position: absolute !important;
  object-fit: cover;
  width: 100%;
  height: 100%;
`

export default BackgroundImage
