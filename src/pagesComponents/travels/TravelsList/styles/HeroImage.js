import styled from 'styled-components'
import Img from 'gatsby-image'

const HeroImage = styled(Img)`
  width: 100%;
  position: absolute !important;
  object-fit: cover;
  height: 100%;
  top: 0;
  left: 0;
`

export default HeroImage