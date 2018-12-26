import React from 'react'
import PropTypes from 'prop-types'
import { Breadcrumb, Cell, Grid } from 'atti-components'
import { graphql } from 'gatsby'

import { Layout } from '@components'
import routes from '@config/routes'
import renderAst from '@helpers/renderAst'
import { Header } from '@pagesComponents/travelBlogPost'



const Travel = ({ data }) => (
  <Layout>
    <Header data={data.contentfulBlogPost} />
    <Grid>
      <Cell cols={[[1, 6],[1, 6],[3, 10]]}>
        <Breadcrumb
          elements={[
            { name: 'Accueil', url: routes.homepage },
            { name: 'Voyages', url: routes.travels },
            { name: data.contentfulBlogPost.title },
          ]}
          separator='>'
        />
        <div>
          {renderAst(data.contentfulBlogPost.body.childMarkdownRemark.htmlAst)}
        </div>
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
        childMarkdownRemark{
          htmlAst
        }
      }
    }
  }
`

export default React.memo(Travel)
