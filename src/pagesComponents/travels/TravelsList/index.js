import React from 'react'
import { Header2 } from 'atti-components'
import { StaticQuery, graphql } from 'gatsby'
import { map } from 'lodash'

import TextContainer from './styles/TextContainer.js'
import TravelContainer from './styles/TravelContainer.js'
import { Link, TravelDates } from '../../../components'

const TravelsList = () => (
  <StaticQuery
    query={graphql`
      query BlogPosts {
        allContentfulBlogPost(sort: {fields: [startDate], order: DESC} ) {
          edges{
            node {
              title
              startDate(formatString: "DD/MM/YYYY")
              endDate(formatString: "DD/MM/YYYY")
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
        {map(data.allContentfulBlogPost.edges, ({node}) => (
          <TravelContainer key={node.slug} background={node.heroImage.file.url}>
            <TextContainer>
              <Header2>{node.title}</Header2>
              <TravelDates startDate={node.startDate} endDate={node.endDate} />
              <Link to={`/travels/${node.slug}`}>Lire l'article</Link>
            </TextContainer>
          </TravelContainer>
        ))}
        <Link to="/">Retour à la page d'accueil</Link>
      </>
    )}
  />
)

export default React.memo(TravelsList)
