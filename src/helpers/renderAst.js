import React from 'react'
import RehypeReact from 'rehype-react'
import { Header1, Header2, Header3, Label, Link, Text } from 'atti-components'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    h1: Header1,
    h2: Header2,
    h3: Header3,
    label: Label,
    p: Text,
  }
}).Compiler

export default renderAst