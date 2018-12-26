import React from 'react'
import { Container } from 'atti-components'

import { Introduction, TravelsList } from '@pagesComponents/travels'
import Layout from '@components/Layout/index.js'

const Travels = () => (
  <Layout>
    <Container>
      <Introduction />
      <TravelsList />
    </Container>
  </Layout>
)

export default Travels
