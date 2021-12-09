import React from 'react'
import { useTheme } from 'styled-components'

import routes from '@config/routes'
import { useDarkTheme } from '@components/Layout/context/DarkThemeContext'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'

import {
  Checkbox,
  HiddenLabel,
  MenuContainer,
  MenuLink,
  RightLinksContainer,
  Slider,
  SwitchContainer,
  ThemeSwitch,
} from './styles'

const Menu = () => {
  const theme = useTheme()
  const { lightMenu } = useLightMenu()
  const { setDarkTheme } = useDarkTheme()

  if (typeof window !== 'undefined') {
    window.theme = theme
  }

  const onChangeSwitch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setDarkTheme(event.target.checked)
  }

  return (
    <MenuContainer light={lightMenu}>
      <MenuLink to={routes.homepage}>Home</MenuLink>

      <RightLinksContainer>
        <MenuLink to={routes.travels}>Voyages</MenuLink>
        <MenuLink to={routes.web}>Web</MenuLink>
        <SwitchContainer>
          <ThemeSwitch htmlFor="lightDark">
            <Checkbox
              checked={useDarkTheme().darkTheme}
              onChange={onChangeSwitch}
              type="checkbox"
              id="lightDark"
            />
            <Slider />
            <HiddenLabel>Enable Dark Mode!</HiddenLabel>
          </ThemeSwitch>
        </SwitchContainer>
      </RightLinksContainer>
    </MenuContainer>
  )
}

export default Menu
