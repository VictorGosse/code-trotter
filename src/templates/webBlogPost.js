import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout } from '@components'
import renderAst from '@helpers/renderAstWeb'
import ArticleContainer from '@pagesComponents/webBlogPost/ArticleContainer'
import ArticleTitle from '@pagesComponents/webBlogPost/ArticleTitle'


const WebBlogPost = ({ data }) => (
  <Layout>
    <ArticleContainer>
      <ArticleTitle>{data.contentfulWebBlogPost.title}</ArticleTitle>
      {renderAst(data.contentfulWebBlogPost.content.childMarkdownRemark.htmlAst)}
    </ArticleContainer>
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
