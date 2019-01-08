import React from 'react'

import { Image } from './styles'

const PostImage = ({ alt, src }) => (
    <Image src={src} alt={alt} />
)

export default React.memo(PostImage)