import React from 'react'
import { Container } from 'atti-components'

import { Introduction, Layout } from '@components'
import { WebBlogPostsList } from '@pagesComponents/web'


const Web = () => (
  <Layout>
    <Container>
      <Introduction title="Développement Web" />
      <WebBlogPostsList />
    </Container>
  </Layout>
)

export default React.memo(Web)
