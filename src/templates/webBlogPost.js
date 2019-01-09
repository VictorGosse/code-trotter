import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Bio, Layout, SEO } from '@components'
import routes from '@config/routes'
import renderAst from '@helpers/renderAstWeb'
import { ArticleContainer, Header, Share } from '@pagesComponents/webBlogPost'


const WebBlogPost = ({ data }) => (
  <Layout>
    <SEO 
      description={data.contentfulWebBlogPost.description}
      image={data.contentfulWebBlogPost.metaImage.file.url}
      lang="en"
      url={`${routes.root}${routes.web}/${data.contentfulWebBlogPost.slug}`}
      title={data.contentfulWebBlogPost.title}
    />
    <ArticleContainer>
      <Header article={data.contentfulWebBlogPost} />
      {renderAst(data.contentfulWebBlogPost.content.childMarkdownRemark.htmlAst)}
      <Share slug={data.contentfulWebBlogPost.slug} title={data.contentfulWebBlogPost.title} />
      <Bio />
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
      description
      metaImage {
        file {
          url
        }
      }
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
