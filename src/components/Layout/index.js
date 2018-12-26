import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'atti-components'

import Footer from '../Footer'
import Menu from '../Menu'
import theme from './theme'

const Layout = ({ children, light }) => (
  <ThemeProvider theme={theme}>
    <Menu light={light} />
    {children}
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(Layout)
