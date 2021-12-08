import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { useDarkTheme } from '../context/DarkThemeContext'
import { defaultTheme, defaultThemeDark } from '@config/themes'

type Props = {
  children: React.ReactNode
}

const GlobalStyles = createGlobalStyle`
  html {
    --color-black: #222222;
    --color-light-black: #3B3B3B;
    --color-primary: #1129d8;
  }
`

const GlobalStylesDark = createGlobalStyle`
  html {
    --color-black: rgba(255, 255, 255, 0.88);
    --color-light-black: rgba(255, 255, 255, 0.88);
    --color-primary: #84c1ff;
  }
`

const ThemeContainer = ({ children }: Props) => {
  const { darkTheme } = useDarkTheme()

  return (
    <ThemeProvider theme={darkTheme ? defaultThemeDark : defaultTheme}>
      <GlobalStyles />
      {darkTheme && <GlobalStylesDark />}
      {children}
    </ThemeProvider>
  )
}

export default ThemeContainer
