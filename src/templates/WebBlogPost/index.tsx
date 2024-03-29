import React from 'react'
import { graphql } from 'gatsby'

import { Bio, SEO } from '@components'
import WebProvider from '@components/WebProvider'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'
import routes from '@config/routes'
import renderAst from '@helpers/renderAstWeb'

import ArticleContainer from './ArticleContainer'
import AssetContext from './Context/asset-context'
import Header from './Header'
import Share from './Share'

type Data = {
  data: {
    allContentfulAsset: {
      edges: {
        node: Image
      }[]
    }
    contentfulWebBlogPost: WebArticle
  }
}

const WebBlogPost = ({ data }: Data) => {
  useLightMenu().setLightMenu(false)

  return (
    <WebProvider>
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
        <Share
          slug={data.contentfulWebBlogPost.slug + '/'}
          title={data.contentfulWebBlogPost.title}
        />
        <Bio />
      </ArticleContainer>
    </WebProvider>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    contentfulWebBlogPost(id: { eq: $id }) {
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
        childMarkdownRemark {
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
          gatsbyImageData(width: 1600, quality: 85, placeholder: BLURRED, formats: [WEBP])
        }
      }
    }
  }
`

export default WebBlogPost
