import React from 'react'
import { Container } from 'atti-components'

import { TravelsList } from '@pagesComponents/travels'
import { Introduction, Layout, SEO } from '@components'

const Travels = () => (
  <Layout>
    <SEO
      description="Vous pouvez retrouver ici les récits de mes voyages à travers le monde."
      keywords={["voyages", "monde", "travels"]}
      title="Mes voyages"
    />
    <Container>
      <Introduction title="Les voyages" />
      <TravelsList />
    </Container>
  </Layout>
)

export default Travels
