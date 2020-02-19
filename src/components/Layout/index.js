import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../Footer'
import Menu from '../Menu'
import Provider from './components/Provider'
import ThemeContainer from './components/ThemeContainer'

const Layout = ({ children }) => {
  return (
    <Provider>
      <ThemeContainer>
        <Menu />
        {children}
        <Footer />
      </ThemeContainer>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
