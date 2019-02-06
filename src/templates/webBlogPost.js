import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Bio, Layout, SEO } from '@components'
import routes from '@config/routes'
import renderAst from '@helpers/renderAstWeb'
import { ArticleContainer, Header, Share } from '@pagesComponents/webBlogPost'
import AssetContext from '@pagesComponents/webBlogPost/Context/asset-context.js'


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
      <AssetContext.Provider value={data.allContentfulAsset}>
        {renderAst(data.contentfulWebBlogPost.content.childMarkdownRemark.htmlAst)}
      </AssetContext.Provider>
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
    allContentfulAsset {
      edges {
        node {
          file {
            url
          }
          fluid(quality: 100, maxWidth: 1600) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default React.memo(WebBlogPost)
