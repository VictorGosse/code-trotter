import React from 'react'
import { Container } from 'atti-components'

import { Introduction, SEO } from '@components'
import { WebBlogPostsList } from '@pagesComponents/web'


const Web = () => (
  <>
    <SEO
      description="You can find here multiple articles related to front-end development, web development, project management, etc."
      keywords={["web", "articles", "development", "HTML", "CSS", "JavaScript", "React", "project management", "integration"]}
      lang="en"
      title="The Code-trotter's blog"
    />
    <Container>
      <Introduction title="Web development" />
      <WebBlogPostsList />
    </Container>
  </>
)

export default Web
