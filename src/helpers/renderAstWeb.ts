import React from 'react'
import RehypeReact from 'rehype-react'
import {
  AutoLink,
  Blockquote,
  EM,
  Header2,
  Header3,
  Header4,
  Header5,
  Image,
  List,
  ListItem,
  Separator,
  Strong,
  Text,
} from '@templates/WebBlogPost/PostContent'

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    a: AutoLink,
    blockquote: Blockquote,
    em: EM,
    h2: Header2,
    h3: Header3,
    h4: Header4,
    h5: Header5,
    hr: Separator,
    img: Image,
    li: ListItem,
    p: Text,
    strong: Strong,
    ul: List,
  },
}).Compiler

export default renderAst
