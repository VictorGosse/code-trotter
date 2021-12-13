import React from 'react'
import { Container } from '@designSystem'

import { Introduction, SEO } from '@components'
import WebProvider from '@components/WebProvider'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'

import WebBlogPostsList from './WebBlogPostsList'

const Web = () => {
  useLightMenu().setLightMenu(false)

  return (
    <WebProvider>
      <SEO
        description="You can find here multiple articles related to front-end development, web development, project management, etc."
        lang="en"
        title="The Code-trotter's blog"
      />
      <Container>
        <Introduction title="Web development" />
      </Container>
      <WebBlogPostsList />
    </WebProvider>
  )
}

export default Web
