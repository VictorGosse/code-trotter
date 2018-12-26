import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'atti-components'
import { graphql } from 'gatsby'

import { Layout } from '@components'
import renderAst from '@helpers/renderAst'
import { Breadcrumb, Header } from '@pagesComponents/travelBlogPost'



const Travel = ({ data }) => (
  <Layout light>
    <Header data={data.contentfulBlogPost} />
    <Container>
      <Breadcrumb title={data.contentfulBlogPost.title} />
      <div>
        {renderAst(data.contentfulBlogPost.body.childMarkdownRemark.htmlAst)}
      </div>
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
        description
        file {
          url
          fileName
          contentType
        }
        title
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
  }
`

export default React.memo(Travel)
