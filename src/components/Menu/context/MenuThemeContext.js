import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

const MenuThemeContext = React.createContext()

const MenuThemeProvider = ({ children }) => {
  const [light, setLight] = useState(false)
  return (
    <MenuThemeContext.Provider
      value={{
        light: light,
        setLight: light => setLight(light),
      }}
    >
      {children}
    </MenuThemeContext.Provider>
  )
}

MenuThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

const useMenuTheme = () => useContext(MenuThemeContext)

export { MenuThemeProvider, useMenuTheme }
