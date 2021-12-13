import React from 'react'

type ContextState = {
  edges: {
    node: Image
  }[]
}

const AssetContext = React.createContext({} as ContextState)

export default AssetContext
