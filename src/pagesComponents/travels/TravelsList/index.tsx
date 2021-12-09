import React from 'react'
import { Header2 } from '@designSystem'
import { StaticQuery, graphql } from 'gatsby'
import { map } from 'lodash'

import HeroImage from './styles/HeroImage'
import TextContainer from './styles/TextContainer'
import TravelContainer from './styles/TravelContainer'
import { SecondaryButton, TravelDates } from '@components'
import routes from '@config/routes'

type Data = {
  allContentfulBlogPost: {
    edges: {
      node: Travel
    }[]
  }
}

const TravelsList = () => (
  <StaticQuery
    query={graphql`
      query BlogPosts {
        allContentfulBlogPost(sort: { fields: [startDate], order: DESC }) {
          edges {
            node {
              title
              startDate(formatString: "DD/MM/YYYY")
              endDate(formatString: "DD/MM/YYYY")
              heroImage {
                description
                gatsbyImageData(width: 1200, quality: 85, placeholder: BLURRED, formats: [WEBP])
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
    render={(data: Data) => (
      <>
        {map(data.allContentfulBlogPost.edges, ({ node }) => (
          <TravelContainer key={node.slug}>
            {node.heroImage?.gatsbyImageData && (
              <HeroImage image={node.heroImage?.gatsbyImageData} alt="" />
            )}
            <TextContainer>
              <Header2>{node.title}</Header2>
              {node.startDate && node.endDate && (
                <TravelDates startDate={node.startDate} endDate={node.endDate} />
              )}
              <SecondaryButton to={`${routes.travels}${node.slug}/`}>
                Lire l&apos;article
              </SecondaryButton>
            </TextContainer>
          </TravelContainer>
        ))}
      </>
    )}
  />
)

export default TravelsList
