import React from 'react'

import { slugify } from '@helpers'
import { Anchor } from './styles'

const TitleWithAnchor = ({ Compo, children, className }) => (
  <Compo className={className} id={slugify(children[0])}>
    <Anchor href={`#${slugify(children[0])}`}>#</Anchor>
    {children}
  </Compo>
)

export default TitleWithAnchor
