import React from 'react'
import { useTheme } from 'styled-components'

import routes from '@config/routes'

import MenuContainer from './styles/MenuContainer'
import MenuLink from './styles/MenuLink'

const Menu = ({ light }) => {
  const theme = useTheme()
  if (typeof window !== "undefined") {
    window.theme = theme
  }

  return (
    <MenuContainer light={light}>
      <MenuLink to={routes.homepage}>Home</MenuLink>

      <div>
        <MenuLink to={routes.travels}>Voyages</MenuLink>
        <MenuLink to={routes.web}>Web</MenuLink>
      </div>
    </MenuContainer>
  )
}

export default Menu
