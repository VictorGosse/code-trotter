import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

const DarkThemeContext = React.createContext()

const DarkThemeProvider = ({ children, theme }) => {
  const [darkTheme, setDarkTheme] = useState(theme)
  return (
    <DarkThemeContext.Provider
      value={{
        darkTheme: darkTheme,
        setDarkTheme: darkTheme => setDarkTheme(darkTheme),
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
}

DarkThemeProvider.defaultProps = {
  theme: false,
}

DarkThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.bool,
}

const useDarkTheme = () => useContext(DarkThemeContext)

export { DarkThemeProvider, useDarkTheme }
