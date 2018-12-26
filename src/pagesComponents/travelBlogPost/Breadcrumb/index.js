import React from 'react'

import { Breadcrumb } from 'atti-components'

import routes from '@config/routes'
import BreadcrumbContainer from './styles/BreadcrumbContainer'

const BreadcrumbTravel = ({ title }) => (
  <BreadcrumbContainer>
    <Breadcrumb
      elements={[
        { name: 'Home', url: routes.homepage },
        { name: 'Voyages', url: routes.travels },
        { name: title },
      ]}
      separator='>'
    />
  </BreadcrumbContainer>
)

export default React.memo(BreadcrumbTravel)