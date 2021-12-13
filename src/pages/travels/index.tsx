import React from 'react'
import { Container } from '@designSystem'

import { Introduction, SEO } from '@components'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'

import TravelsList from './TravelsList'

const Travels = () => {
  useLightMenu().setLightMenu(false)

  return (
    <>
      <SEO
        description="Vous pouvez retrouver ici les récits de mes voyages à travers le monde."
        title="Mes voyages"
      />
      <Container>
        <Introduction title="Les voyages" />
        <TravelsList />
      </Container>
    </>
  )
}

export default Travels
