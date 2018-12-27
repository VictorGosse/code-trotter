import React from 'react'
import PropTypes from 'prop-types'
import { Container, Header1 } from 'atti-components'
import { graphql } from 'gatsby'

import { Layout } from '@components'



const WebBlogPost = ({ data }) => (
  <Layout light>
    <Container>
      <Header1>{data.contentfulWebBlogPost.title}</Header1>
    </Container>
  </Layout>
)

WebBlogPost.PropTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query($id: String!) {
    contentfulWebBlogPost(id: {eq: $id}) {
      title
      publicationDate
      slug
      content {
        childMarkdownRemark{
          htmlAst
        }
      }
    }
  }
`

export default React.memo(WebBlogPost)
