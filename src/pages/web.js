import React from 'react'
import { Container } from 'atti-components'

import { Introduction, Layout, SEO } from '@components'
import { WebBlogPostsList } from '@pagesComponents/web'


const Web = () => (
  <Layout web>
    <SEO
      description="You can find here multiple articles related to front-end development, web development, project management, etc."
      keywords={["web", "articles", "development", "HTML", "CSS", "JavaScript", "React", "project management", "integration"]}
      lang="en"
      title="The Code-trotter's blog"
    />
    <Container>
      <Introduction title="Web development" />
    </Container>
    <WebBlogPostsList />
  </Layout>
)

export default Web
