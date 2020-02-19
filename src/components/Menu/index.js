import React from 'react'
import { useTheme } from 'styled-components'

import routes from '@config/routes'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'

import MenuContainer from './styles/MenuContainer'
import MenuLink from './styles/MenuLink'

const Menu = () => {
  const theme = useTheme()
  const { lightMenu } = useLightMenu()

  if (typeof window !== "undefined") {
    window.theme = theme
  }

  return (
    <MenuContainer light={lightMenu}>
      <MenuLink to={routes.homepage}>Home</MenuLink>

      <div>
        <MenuLink to={routes.travels}>Voyages</MenuLink>
        <MenuLink to={routes.web}>Web</MenuLink>
      </div>
    </MenuContainer>
  )
}

export default Menu
