import React from 'react'
import PropTypes from 'prop-types'
import { defaultTheme as mjTheme,  ThemeProvider } from 'atti-components'

import Footer from '../Footer'
import Menu from '../Menu'
import theme from './theme'
import webTheme from './webTheme'

const Layout = ({ children, light, web }) => (
  <ThemeProvider theme={mjTheme} otherTheme={web ? webTheme : theme}>
    <Menu light={light} />
    {children}
    <Footer />
  </ThemeProvider>
)

Layout.defaultProps = {
  web : false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  web: PropTypes.bool,
}

export default Layout
