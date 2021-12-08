import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

const LightMenuContext = React.createContext()

const LightMenuProvider = ({ children, light }) => {
  const [lightMenu, setLightMenu] = useState(light)

  return (
    <LightMenuContext.Provider
      value={{
        lightMenu: lightMenu,
        setLightMenu: (lightMenu) => setLightMenu(lightMenu),
      }}
    >
      {children}
    </LightMenuContext.Provider>
  )
}

LightMenuProvider.defaultProps = {
  light: false,
}

LightMenuProvider.propTypes = {
  children: PropTypes.any.isRequired,
  light: PropTypes.bool,
}

const useLightMenu = () => useContext(LightMenuContext)

export { LightMenuProvider, useLightMenu }
