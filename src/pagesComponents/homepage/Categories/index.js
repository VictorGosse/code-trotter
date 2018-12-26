import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'

import routes from '@config/routes'
import AngleRight from '@icons/AngleRight.js'
import CategoryContainer from './styles/CategoryContainer'
import CategoryLink from './styles/CategoryLink'
import LeftCategory from './styles/LeftCategory'
import RightCategory from './styles/RightCategory'
import WhiteSeparator from './styles/WhiteSeparator'

const Categories = () => (
  <StaticQuery
    query={graphql`
      query HomePageImages {
        allContentfulHomePageImage {
          edges{
            node {
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <CategoryContainer>
        <LeftCategory image={data.allContentfulHomePageImage.edges[1].node.image.file.url}>
          <CategoryLink><Link to={routes.travels}><AngleRight /> Voyages</Link></CategoryLink>
        </LeftCategory>
        <WhiteSeparator />
        <RightCategory image={data.allContentfulHomePageImage.edges[0].node.image.file.url}>
          <CategoryLink><Link to={routes.web}><AngleRight /> Web</Link></CategoryLink>
        </RightCategory>
      </CategoryContainer>
    )}
  />
)

export default React.memo(Categories)
