import React from 'react'

import routes from '@config/routes'

import MenuContainer from './styles/MenuContainer'
import MenuLink from './styles/MenuLink'

const Menu = ({ light }) => (
  <MenuContainer light={light}>
    <MenuLink to={routes.homepage}>Home</MenuLink>

    <div>
      <MenuLink to={routes.travels}>Voyages</MenuLink>
      <MenuLink to={routes.web}>Web</MenuLink>
    </div>
  </MenuContainer>
)

export default Menu