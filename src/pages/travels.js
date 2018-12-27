import React from 'react'
import { Container } from 'atti-components'

import { TravelsList } from '@pagesComponents/travels'
import Introduction from '@components/Introduction/index.js'
import Layout from '@components/Layout/index.js'

const Travels = () => (
  <Layout>
    <Container>
      <Introduction title="Les voyages" />
      <TravelsList />
    </Container>
  </Layout>
)

export default Travels
