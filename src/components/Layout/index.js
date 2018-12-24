import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, theme } from 'atti-components'

import Footer from '../Footer'

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
    <Footer />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default React.memo(Layout)
