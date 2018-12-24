import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Cell, Grid, Header2 } from 'atti-components'
import { graphql } from 'gatsby'

import { Layout } from '../components'
import { Header } from '../pagesComponents/travelBlogPost'

const Travel = ({ data }) => (
  <Layout>
    <Header data={data.contentfulBlogPost} />
    <Grid>
      <Cell cols={[[1, 6],[1, 6],[3, 10]]}>
        <Header2>{data.contentfulBlogPost.title}</Header2>
        <Breadcrumb
          elements={[
            { name: 'Accueil', url: '/' },
            { name: 'Voyages', url: '/travels' },
            { name: data.contentfulBlogPost.title },
          ]}
          separator='>'
        />
      </Cell>
    </Grid>
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
        body
      }
    }
  }
`

export default React.memo(Travel)
