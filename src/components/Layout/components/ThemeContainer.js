import React from 'react'
import PropTypes from 'prop-types'
import { defaultTheme as attiTheme, ThemeProvider } from 'atti-components'

import { useDarkTheme } from '../context/DarkThemeContext'
import { defaultTheme, defaultThemeDark } from '@config/themes'

const ThemeContainer = ({ children }) => {
  const { darkTheme } = useDarkTheme()

  return (
    <ThemeProvider theme={attiTheme} otherTheme={darkTheme ? defaultThemeDark : defaultTheme}>
      {children}
    </ThemeProvider>
  )
}

ThemeContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeContainer
