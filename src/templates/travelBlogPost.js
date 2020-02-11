import React from 'react'
import { Container } from 'atti-components'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, SEO } from '@components'
import renderAst from '@helpers/renderAstTravels'
import { Breadcrumb, Header } from '@pagesComponents/travelBlogPost'
import AssetContext from '@pagesComponents/travelBlogPost/Context/asset-context.js'

const ArticleContainer = styled('article')`
  *:first-child {
    margin-top: ${({ theme }) => theme.spaces.s2};
  }
`

const Travel = ({ data }) => (
  <Layout light>
    <SEO 
      description={data.contentfulBlogPost.description.description}
      title={data.contentfulBlogPost.title}
      type="article"
    />
    <Header data={data.contentfulBlogPost} />
    <Container>
      <Breadcrumb title={data.contentfulBlogPost.title} />
      <ArticleContainer>
        <AssetContext.Provider value={data.allContentfulAsset}>
          {renderAst(data.contentfulBlogPost.body.childMarkdownRemark.htmlAst)}
        </AssetContext.Provider>
      </ArticleContainer>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      title
      startDate: startDate(formatString: "DD/MM/YYYY")
      endDate: endDate(formatString: "DD/MM/YYYY")
      heroImage {
        fluid(quality: 100, maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      place
      slug
      description {
        description
      }
      body {
        childMarkdownRemark{
          htmlAst
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

export default React.memo(Travel)
