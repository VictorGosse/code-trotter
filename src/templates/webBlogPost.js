import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, SEO } from '@components'
import renderAst from '@helpers/renderAstWeb'
import ArticleContainer from '@pagesComponents/webBlogPost/ArticleContainer'
import Header from '@pagesComponents/webBlogPost/Header'


const WebBlogPost = ({ data }) => (
  <Layout>
    <SEO 
      description=""
      keywords={[]}
      title={data.contentfulWebBlogPost.title}
    />
    <ArticleContainer>
      <Header article={data.contentfulWebBlogPost} />
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
      publicationDate: publicationDate(formatString: "DD/MM/YYYY")
      publicationDateFormatted: publicationDate(formatString: "DD-MM-YYYY")
      slug
      content {
        childMarkdownRemark{
          htmlAst
          timeToRead
        }
      }
    }
  }
`

export default React.memo(WebBlogPost)
