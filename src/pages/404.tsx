import React from 'react'
import { Container, Text } from '@designSystem'

import { Introduction, SEO } from '@components'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'

const NotFoundPage = () => {
  useLightMenu().setLightMenu(false)

  return (
    <>
      <SEO description="Not found" lang="en" title="404: Not found" />
      <Container>
        <Introduction title="Not Found" />
        <Text mt="40px" textAlign="center">
          You just hit a route that doesn&#39;t exist... the sadness.
        </Text>
      </Container>
    </>
  )
}

export default NotFoundPage
