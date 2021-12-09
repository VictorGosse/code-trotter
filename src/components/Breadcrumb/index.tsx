import React from 'react'
import { map } from 'lodash'

import { BreadcrumbLink, BreadcrumbSeparator, CurrentElement, StyledBreadcrumb } from './styles'

type Props = {
  elements: Array<{
    name: string
    url: string
  }>
  separator: React.ReactNode
}

const Breadcrumb = ({ elements, separator }: Props) => (
  <StyledBreadcrumb>
    {map(elements, (element, index) => (
      <React.Fragment key={element.name}>
        {element.url && <BreadcrumbLink to={element.url}>{element.name}</BreadcrumbLink>}
        {!element.url && <CurrentElement>{element.name}</CurrentElement>}
        {index + 1 < elements.length && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
      </React.Fragment>
    ))}
  </StyledBreadcrumb>
)

export default Breadcrumb
