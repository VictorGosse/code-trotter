import React from 'react'
import { Container } from 'atti-components'

import { TravelsList } from '@pagesComponents/travels'
import { Introduction, Layout } from '@components'

const Travels = () => (
  <Layout>
    <Container>
      <Introduction title="Les voyages" />
      <TravelsList />
    </Container>
  </Layout>
)

export default Travels
