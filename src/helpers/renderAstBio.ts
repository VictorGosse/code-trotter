import React from 'react'
import RehypeReact from 'rehype-react'
import { Link, Text } from '@components/Bio/PostContent'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    p: Text,
  },
}).Compiler

export default renderAst
