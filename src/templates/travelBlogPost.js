import React from 'react'
import { Container } from 'atti-components'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import { SEO } from '@components'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'
import renderAst from '@helpers/renderAstTravels'
import { Breadcrumb, Header } from '@pagesComponents/travelBlogPost'
import AssetContext from '@pagesComponents/travelBlogPost/Context/asset-context.js'

const ArticleContainer = styled('article')`
  padding-top: ${({ theme }) => theme.spaces.s2};
`

const Travel = ({ data }) => {
  useLightMenu().setLightMenu(true)

  return (
    <>
      <SEO
        description={data.contentfulBlogPost.description.description}
        title={data.contentfulBlogPost.title}
        type="article"
      />
      <Header data={data.contentfulBlogPost} />
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
