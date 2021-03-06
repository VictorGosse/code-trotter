import React from 'react'

import { filter } from 'lodash'

import { Image, ImageLegend } from './styles'
import AssetContext from '../Context/asset-context.js'

const PostImage = ({ alt, src }) => (
  <AssetContext.Consumer>
    {value => {
      const img = filter(value.edges, val => val.node.file.url === src)[0]
      return img && (
        <>
          <Image fluid={img.node.fluid} ratio={img.node.fluid.aspectRatio} alt="" Tag="span" />
          <ImageLegend>{alt}</ImageLegend>
        </>
      )
    }}
  </AssetContext.Consumer>
)

export default PostImage
