import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { webTheme, webThemeDark } from '@config/themes'
import { useDarkTheme } from '@components/Layout/context/DarkThemeContext'

type Props = {
  children: React.ReactNode
}

const GlobalStyles = createGlobalStyle`
  html {
    --color-black: #222222;
    --color-light-black: #3B3B3B;
    --color-primary: #12cbc4;
  }
`

const GlobalStylesDark = createGlobalStyle`
  html {
    --color-black: rgba(255, 255, 255, 0.88);
    --color-light-black: rgba(255, 255, 255, 0.88);
    --color-primary: #12cbc4;
  }
`

const WebProvider = ({ children }: Props) => {
  const { darkTheme } = useDarkTheme()

  return (
    <ThemeProvider theme={darkTheme ? webThemeDark : webTheme}>
      <GlobalStyles />
      {darkTheme && <GlobalStylesDark />}
      {children}
    </ThemeProvider>
  )
}

export default WebProvider
