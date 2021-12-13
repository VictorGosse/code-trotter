import React from 'react'
import { Container } from '@designSystem'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { SEO } from '@components'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'
import renderAst from '@helpers/renderAstTravels'

import AssetContext from './Context/asset-context'
import Breadcrumb from './Breadcrumb'
import Header from './Header'

type Data = {
  data: {
    allContentfulAsset: AllContentfulAsset
    contentfulBlogPost: TravelArticle
  }
}

const ArticleContainer = styled('article')`
  padding-top: ${({ theme }) => theme.spaces.s2};
`

const Travel = ({ data }: Data) => {
  useLightMenu().setLightMenu(true)

  return (
    <>
      <SEO
        description={data.contentfulBlogPost.description.description}
        title={data.contentfulBlogPost.title}
        type="article"
      />
      <Header article={data.contentfulBlogPost} />
      <Container>
        <Breadcrumb article={data.contentfulBlogPost} />
        <ArticleContainer>
          <AssetContext.Provider value={data.allContentfulAsset}>
            {renderAst(data.contentfulBlogPost.body.childMarkdownRemark.htmlAst)}
          </AssetContext.Provider>
        </ArticleContainer>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query ($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      startDate: startDate(formatString: "DD/MM/YYYY")
      endDate: endDate(formatString: "DD/MM/YYYY")
      heroImage {
        gatsbyImageData(width: 1600, quality: 85, placeholder: BLURRED, formats: [WEBP])
      }
      place
      slug
      description {
        description
      }
      body {
        childMarkdownRemark {
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
          gatsbyImageData(width: 1000, quality: 85, placeholder: BLURRED, formats: [WEBP])
        }
      }
    }
  }
`

export default Travel
