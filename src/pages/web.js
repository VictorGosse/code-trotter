import React from 'react'
import { Container } from 'atti-components'

import Layout from '@components/Layout/index.js'
import Introduction from '@components/Introduction/index.js'
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
