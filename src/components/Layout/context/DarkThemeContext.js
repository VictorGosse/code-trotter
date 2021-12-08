import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const DarkThemeContext = React.createContext()

const DarkThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    setDarkTheme(
      typeof window !== 'undefined'
        ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        : false,
    )
  }, [setDarkTheme])

  return (
    <DarkThemeContext.Provider
      value={{
        darkTheme: darkTheme,
        setDarkTheme: (darkTheme) => setDarkTheme(darkTheme),
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
}
DarkThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
}

const useDarkTheme = () => useContext(DarkThemeContext)

export { DarkThemeProvider, useDarkTheme }
