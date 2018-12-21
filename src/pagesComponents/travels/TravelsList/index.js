import React from 'react'
import Link from 'gatsby-link'
import { Header2 } from 'atti-components'
import { StaticQuery, graphql } from 'gatsby'
import { map } from 'lodash'

import TravelContainer from './styles/TravelContainer.js'

const TravelsList = () => (
  <StaticQuery
    query={graphql`
      query BlogPosts {
        allContentfulBlogPost(sort: {fields: [startDate], order: DESC} ) {
          edges{
            node {
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
        }
      }
    `}
    render={data => (
      <>
        {map(data.allContentfulBlogPost.edges, article => (
          <TravelContainer background={article.node.heroImage.file.url}>
            <Header2>{article.node.title}</Header2> 
          </TravelContainer>
        ))}
        <Link to="/">Retour à la page d'accueil</Link>
      </>
    )}
  />
)

export default React.memo(TravelsList)
