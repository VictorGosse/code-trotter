import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const ImageHeader = styled(GatsbyImage)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute !important;
  left: 0;
  top: 0;
`

export default ImageHeader
