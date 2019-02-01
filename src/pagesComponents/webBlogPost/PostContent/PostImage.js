import React from 'react'

import { Image, ImageLegend } from './styles'

const PostImage = ({ alt, src }) => (
  <>
    <Image src={src} alt="" />
    <ImageLegend>{alt}</ImageLegend>
  </>
)

export default React.memo(PostImage)