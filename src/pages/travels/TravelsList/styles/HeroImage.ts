import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const HeroImage = styled(GatsbyImage)`
  width: 100%;
  position: absolute !important;
  object-fit: cover;
  height: 100%;
  top: 0;
  left: 0;
`

export default HeroImage
