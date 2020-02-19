import React from 'react'
import PropTypes from 'prop-types'
import { defaultTheme as mjTheme,  ThemeProvider } from 'atti-components'

import { useThemeApp } from '../context/ThemeAppContext'
import theme from '../theme'
import webTheme from '../webTheme'

const ThemeContainer = ({ children }) => {
  const { themeApp } = useThemeApp()

  return (
    <ThemeProvider theme={mjTheme} otherTheme={themeApp === "web" ? webTheme : theme}>
      {children}
    </ThemeProvider>
  )
}

ThemeContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContainer
