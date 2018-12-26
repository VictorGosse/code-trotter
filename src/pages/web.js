import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'atti-components'

import Layout from '@components/Layout/index.js'
import { Introduction } from '@pagesComponents/web'
import routes from '@config/routes'


const Web = () => (
  <Layout>
    <Container>
      <Introduction />
      <Link to={routes.homepage}>Retour à la page d'accueil</Link>
    </Container>
  </Layout>
)

export default React.memo(Web)
