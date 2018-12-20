import React from 'react'
import Link from 'gatsby-link'
import { Header2 } from 'atti-components'
import { StaticQuery, graphql } from 'gatsby'

const TravelsList = () => (
  <StaticQuery
    query={graphql`
      query BlogPosts {
        allContentfulBlogPost {
          edges{
            node {
              title
              body {
                id
                body
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Header2>{data.allContentfulBlogPost.edges[0].node.title}</Header2>
        <Header2>{data.allContentfulBlogPost.edges[1].node.title}</Header2>
        <Link to="/">Retour à la page d'accueil</Link>
      </>
    )}
  />
)

export default React.memo(TravelsList)
