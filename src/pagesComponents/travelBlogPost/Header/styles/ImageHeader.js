import styled from 'styled-components'
import Img from 'gatsby-image'

const ImageHeader = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute !important;
  left: 0;
  top: 0;
`

export default ImageHeader