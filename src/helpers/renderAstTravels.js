import React from 'react'
import RehypeReact from 'rehype-react'
import { Header2, Header3, Image, Link, Text } from '@pagesComponents/travelBlogPost/PostContent'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    h2: Header2,
    h3: Header3,
    img: Image,
    p: Text,
  }
}).Compiler

export default renderAst