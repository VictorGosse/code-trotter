import React, { createContext, useContext, useEffect, useState } from 'react'

type ContextState = {
  darkTheme: boolean
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}
type Props = {
  children: React.ReactNode
}

const DarkThemeContext = createContext({} as ContextState)

const DarkThemeProvider = ({ children }: Props) => {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    setDarkTheme(
      typeof window !== 'undefined'
        ? window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        : false,
    )
  }, [setDarkTheme])

  return (
    <DarkThemeContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
      }}
    >
      {children}
    </DarkThemeContext.Provider>
  )
}

const useDarkTheme = () => useContext(DarkThemeContext)

export { DarkThemeProvider, useDarkTheme }
