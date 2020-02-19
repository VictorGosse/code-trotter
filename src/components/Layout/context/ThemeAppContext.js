import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

const ThemeAppContext = React.createContext()

const ThemeAppProvider = ({ children, theme }) => {
  const [themeApp, setThemeApp] = useState(theme)
  return (
    <ThemeAppContext.Provider
      value={{
        themeApp: themeApp,
        setThemeApp: themeApp => setThemeApp(themeApp),
      }}
    >
      {children}
    </ThemeAppContext.Provider>
  )
}

ThemeAppProvider.defaultProps = {
  theme: "",
}

ThemeAppProvider.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.string,
}

const useThemeApp = () => useContext(ThemeAppContext)

export { ThemeAppProvider, useThemeApp }
