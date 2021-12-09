import React from 'react'

import { slugify } from '@helpers'
import { Anchor } from './styles'

type Props = {
  Compo: React.ElementType
  children: string
  className: string
}

const TitleWithAnchor = ({ Compo, children, className }: Props) => (
  <Compo className={className} id={slugify(children[0])}>
    <Anchor href={`#${slugify(children[0])}`}>#</Anchor>
    {children}
  </Compo>
)

export default TitleWithAnchor
