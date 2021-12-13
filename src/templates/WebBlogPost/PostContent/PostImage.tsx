import React from 'react'

import { filter } from 'lodash'

import { Image, ImageLegend } from './styles'
import AssetContext from '../Context/asset-context'

type Props = {
  alt: string
  src: string
}

const PostImage = ({ alt, src }: Props) => (
  <AssetContext.Consumer>
    {(value) => {
      const img = filter(value.edges, (val) => val.node.file.url === src)[0]

      return (
        img && (
          <>
            <Image image={img.node.gatsbyImageData} alt="" />
            <ImageLegend>{alt}</ImageLegend>
          </>
        )
      )
    }}
  </AssetContext.Consumer>
)

export default PostImage
