import React from 'react'
import RehypeReact from 'rehype-react'
import { 
  Blockquote,
  EM,
  Header2, 
  Header3, 
  Image, 
  Link, 
  List, 
  ListItem, 
  Separator, 
  Strong, 
  Text,
} from '@pagesComponents/webBlogPost/PostContent'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: Link,
    blockquote: Blockquote,
    em: EM,
    h2: Header2,
    h3: Header3,
    hr: Separator,
    img: Image,
    li: ListItem,
    p: Text,
    strong: Strong,
    ul: List,
  }
}).Compiler

export default renderAst