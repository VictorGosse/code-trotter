import React from 'react'

import { DarkThemeProvider } from '../context/DarkThemeContext'
import { LightMenuProvider } from '../context/LightMenuContext'

type Props = {
  children: React.ReactNode
}

const Provider = ({ children }: Props) => (
  <LightMenuProvider>
    <DarkThemeProvider>{children}</DarkThemeProvider>
  </LightMenuProvider>
)

export default Provider
