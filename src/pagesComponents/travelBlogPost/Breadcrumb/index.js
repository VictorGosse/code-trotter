import React from 'react'
import { Helmet } from 'react-helmet'

import routes from '@config/routes'
import BreadcrumbContainer from './styles/BreadcrumbContainer'
import { Breadcrumb } from '@components'

const BreadcrumbTravel = ({ article }) => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "${routes.root}"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Voyages",
              "item": "${routes.root}${routes.travels}"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "${article.title}",
              "item": "${routes.root}${routes.travels}${article.slug}/"
            }]
          }
        `}
      </script>
    </Helmet>
    <BreadcrumbContainer>
      <Breadcrumb
        elements={[
          { name: 'Home', url: routes.homepage },
          { name: 'Voyages', url: routes.travels },
          { name: article.title },
        ]}
        separator='>'
      />
    </BreadcrumbContainer>
  </>
)

export default BreadcrumbTravel
