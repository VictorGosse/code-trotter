import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'atti-components'
import { graphql } from 'gatsby'

import { Layout, SEO } from '@components'
import renderAst from '@helpers/renderAstTravels'
import { Breadcrumb, Header } from '@pagesComponents/travelBlogPost'
import AssetContext from '@pagesComponents/travelBlogPost/Context/asset-context.js'


const Travel = ({ data }) => (
  <Layout light>
    <SEO 
      description={data.contentfulBlogPost.description.description}
      title={data.contentfulBlogPost.title}
    />
    <Header data={data.contentfulBlogPost} />
    <Container>
      <Breadcrumb title={data.contentfulBlogPost.title} />
      <article>
        <AssetContext.Provider value={data.allContentfulAsset}>
          {renderAst(data.contentfulBlogPost.body.childMarkdownRemark.htmlAst)}
        </AssetContext.Provider>
      </article>
    </Container>
  </Layout>
)

Travel.PropTypes = {
  data: PropTypes.object.isRequired
}

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      title
      startDate
      endDate
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
