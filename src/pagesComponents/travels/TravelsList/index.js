import React from 'react'
import { Header2 } from 'atti-components'
import { StaticQuery, graphql } from 'gatsby'
import { map } from 'lodash'

import HeroImage from './styles/HeroImage.js'
import TextContainer from './styles/TextContainer.js'
import TravelContainer from './styles/TravelContainer.js'
import { SecondaryButton, TravelDates } from '@components'
import routes from '@config/routes'

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
                fluid(quality: 100, maxWidth: 1200) {
                  ...GatsbyContentfulFluid
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
          <TravelContainer key={node.slug}>
            <HeroImage fluid={node.heroImage.fluid} alt="" />
            <TextContainer>
              <Header2>{node.title}</Header2>
              <TravelDates startDate={node.startDate} endDate={node.endDate} />
              <SecondaryButton to={`${routes.travels}/${node.slug}`}>Lire l'article</SecondaryButton>
            </TextContainer>
          </TravelContainer>
        ))}
      </>
    )}
  />
)

export default React.memo(TravelsList)
