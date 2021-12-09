import React, { createContext, useContext, useState } from 'react'

type ContextState = {
  lightMenu: boolean
  setLightMenu: React.Dispatch<React.SetStateAction<boolean>>
}
type Props = {
  children: React.ReactNode
  light?: boolean
}

const LightMenuContext = createContext({} as ContextState)

const LightMenuProvider = ({ children, light = false }: Props) => {
  const [lightMenu, setLightMenu] = useState(light)

  return (
    <LightMenuContext.Provider
      value={{
        lightMenu,
        setLightMenu,
      }}
    >
      {children}
    </LightMenuContext.Provider>
  )
}

const useLightMenu = () => useContext(LightMenuContext)

export { LightMenuProvider, useLightMenu }
