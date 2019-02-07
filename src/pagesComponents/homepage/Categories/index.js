import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'

import routes from '@config/routes'
import AngleLeft from '@icons/AngleLeft.js'
import AngleRight from '@icons/AngleRight.js'
import BackgroundImage from './styles/BackgroundImage'
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
                fluid(quality: 100, maxWidth: 1600) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <CategoryContainer>
        <LeftCategory>
          <BackgroundImage fluid={data.allContentfulHomePageImage.edges[1].node.image.fluid} alt="" />
          <CategoryLink><Link to={routes.travels}><AngleRight /> Voyages</Link></CategoryLink>
        </LeftCategory>
        <WhiteSeparator />
        <RightCategory>
          <BackgroundImage fluid={data.allContentfulHomePageImage.edges[0].node.image.fluid} alt="" />
          <CategoryLink><Link to={routes.web}><AngleRight /> Web <AngleLeft /></Link></CategoryLink>
        </RightCategory>
      </CategoryContainer>
    )}
  />
)

export default React.memo(Categories)
