import React from 'react'
import { graphql } from 'gatsby'

import { Bio, SEO } from '@components'
import routes from '@config/routes'
import renderAst from '@helpers/renderAstWeb'
import { ArticleContainer, Header, Share } from '@pagesComponents/webBlogPost'
import AssetContext from '@pagesComponents/webBlogPost/Context/asset-context.js'


const WebBlogPost = ({ data }) => (
  <>
    <SEO
      description={data.contentfulWebBlogPost.description}
      image={data.contentfulWebBlogPost.metaImage.file.url}
      lang="en"
      url={`${routes.root}${routes.web}/${data.contentfulWebBlogPost.slug}`}
      title={data.contentfulWebBlogPost.title}
      type="article"

      extraMeta={[
        {
          name: 'article:author',
          content: ['Victor Gosse'],
        },
        {
          name: 'article:modified_time',
          content: data.contentfulWebBlogPost.updatedAt,
        },
        {
          name: 'article:published_time',
          content: data.contentfulWebBlogPost.publicationDateOG,
        },
        {
          name: 'article:tag',
          content: [...data.contentfulWebBlogPost.tags.split(',')],
        },
        {
          name: 'twitter:label1',
          content: 'Reading time',
        },
        {
          name: 'twitter:data1',
          content: `${data.contentfulWebBlogPost.content.childMarkdownRemark.timeToRead} min read`,
        },
        {
          name: 'twitter:label2',
          content: 'Topics',
        },
        {
          name: 'twitter:data2',
          content: data.contentfulWebBlogPost.tags,
        },
      ]}
    />
    <ArticleContainer>
      <Header article={data.contentfulWebBlogPost} />
      <AssetContext.Provider value={data.allContentfulAsset}>
        {renderAst(data.contentfulWebBlogPost.content.childMarkdownRemark.htmlAst)}
      </AssetContext.Provider>
      <Share slug={data.contentfulWebBlogPost.slug + "/"} title={data.contentfulWebBlogPost.title} />
      <Bio />
    </ArticleContainer>
  </>
)

export const pageQuery = graphql`
  query($id: String!) {
    contentfulWebBlogPost(id: {eq: $id}) {
      title
      publicationDate: publicationDate(formatString: "DD/MM/YYYY")
      publicationDateFormatted: publicationDate(formatString: "DD-MM-YYYY")
      publicationDateOG: publicationDate
      updatedAt
      slug
      description
      tags
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
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default WebBlogPost
