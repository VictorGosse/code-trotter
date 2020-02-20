import React from 'react'
import PropTypes from 'prop-types'

import { DarkThemeProvider } from '../context/DarkThemeContext'
import { LightMenuProvider } from '../context/LightMenuContext'

const Provider = ({ children }) => (
  <LightMenuProvider>
    <DarkThemeProvider>
      {children}
    </DarkThemeProvider>
  </LightMenuProvider>
)

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider
