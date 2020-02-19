import React from 'react'
import { Container, Text } from 'atti-components'

import { Introduction, SEO } from '@components'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'
import { useThemeApp } from '@components/Layout/context/ThemeAppContext'

const NotFoundPage = () => {
  useLightMenu().setLightMenu(false)
  useThemeApp().setThemeApp("")

  return (
    <>
      <SEO title="404: Not found" />
      <Container>
        <Introduction title="Not Found" />
        <Text mt="40px" textAlign="center">You just hit a route that doesn&#39;t exist... the sadness.</Text>
      </Container>
    </>
  )
}

export default NotFoundPage
