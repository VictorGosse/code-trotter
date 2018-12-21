import React from 'react'
import Link from 'gatsby-link'
import { Header2 } from 'atti-components'
import { graphql } from 'gatsby'


const TravelsList = (data) => (
    <>
      <Header2>{data.title}</Header2> 
      <Link to="/">Retour à la page d'accueil</Link>
    </>
)

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

export default React.memo(TravelsList)
