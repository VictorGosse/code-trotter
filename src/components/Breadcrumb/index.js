import React from 'react'
import { map } from 'lodash'

import { Link } from '@components'
import BreadcrumbSeparator from './styles/BreadcrumbSeparator'
import CurrentElement from './styles/CurrentElement'
import StyledBreadcrumb from './styles/StyledBreadcrumb'

/**
 * A breadcrumb component.
 */
const Breadcrumb = ({ elements, separator }) => (
  <StyledBreadcrumb>
    {map(elements, (element, index) => (
      <React.Fragment key={element.name}>
        {element.url && <Link to={element.url}>{element.name}</Link>}
        {!element.url && <CurrentElement>{element.name}</CurrentElement>}
        {index + 1 < elements.length && <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>}
      </React.Fragment>
    ))}
  </StyledBreadcrumb>
)

export default Breadcrumb
