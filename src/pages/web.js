import React from 'react'
import { Container } from 'atti-components'

import { Introduction, Layout, SEO } from '@components'
import { WebBlogPostsList } from '@pagesComponents/web'


const Web = () => (
  <Layout>
    <SEO 
      description="Vous pouvez retrouver ici des articles liés à l'intégration, au développement, à la gestion de projet ou plus globalement, au web !"
      keywords={["web", "articles", "développement", "HTML", "CSS", "JavaScript", "React", "Gestion de projet", "Intégration"]}
      title="Blog du développeur web"
    />
    <Container>
      <Introduction title="Développement Web" />
      <WebBlogPostsList />
    </Container>
  </Layout>
)

export default React.memo(Web)
