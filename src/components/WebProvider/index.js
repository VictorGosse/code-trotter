import React from 'react'
import PropTypes from 'prop-types'
import { defaultTheme as attiTheme, ThemeProvider } from 'atti-components'

import { webTheme, webThemeDark } from '@config/themes'
import { useDarkTheme } from '@components/Layout/context/DarkThemeContext'

const WebProvider = ({ children }) => {
  const { darkTheme } = useDarkTheme()

  return (
    <ThemeProvider theme={attiTheme} otherTheme={darkTheme ? webThemeDark : webTheme}>
      {children}
    </ThemeProvider>
  )
}

WebProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default WebProvider
