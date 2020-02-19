import React from 'react'
import PropTypes from 'prop-types'

import { ThemeAppProvider } from '../context/ThemeAppContext'
import { LightMenuProvider } from '../context/LightMenuContext'

const Provider = ({ children }) => (
  <LightMenuProvider>
    <ThemeAppProvider>
      {children}
    </ThemeAppProvider>
  </LightMenuProvider>
)

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Provider
