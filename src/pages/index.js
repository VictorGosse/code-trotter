import React from 'react'
import Link from 'gatsby-link'
import { Container, Text } from 'atti-components'
import Layout from '../components/Layout/index.js'

import { Introduction } from '../pagesComponents/homepage'

const Index = () => (
  <Layout>
    <Container>
      <Introduction />
      <Text>Coucou</Text>
      <Link to="/travels">Voir les voyages</Link><br/>
      <Link to="/web">Voir le web</Link>
    </Container>
  </Layout>
)

export default React.memo(Index)
