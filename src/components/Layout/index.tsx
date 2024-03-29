import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../Footer'
import Menu from '../Menu'
import AppContainer from './components/AppContainer'
import Provider from './components/Provider'
import ThemeContainer from './components/ThemeContainer'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <Provider>
      <ThemeContainer>
        <AppContainer>
          <Menu />
          {children}
          <Footer />
        </AppContainer>
      </ThemeContainer>
    </Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
