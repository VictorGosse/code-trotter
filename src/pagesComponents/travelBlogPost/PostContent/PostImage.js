import React from 'react'

import { Figure, Image, ImageLegend } from './styles'

const PostImage = ({ alt, src }) => (
  <Figure>
    <Image src={src} alt="" />
    <ImageLegend>{alt}</ImageLegend>
  </Figure>
)

export default React.memo(PostImage)