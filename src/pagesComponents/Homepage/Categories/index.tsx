import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import routes from '@config/routes'
import AngleLeft from '@icons/AngleLeft'
import AngleRight from '@icons/AngleRight'

import BackgroundImage from './styles/BackgroundImage'
import CategoryContainer from './styles/CategoryContainer'
import CategoryLink from './styles/CategoryLink'
import LeftCategory from './styles/LeftCategory'
import RightCategory from './styles/RightCategory'
import WhiteSeparator from './styles/WhiteSeparator'

type Data = {
  allContentfulHomePageImage: {
    edges: {
      node: {
        image: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

const Categories = () => (
  <StaticQuery
    query={graphql`
      query HomePageImages {
        allContentfulHomePageImage {
          edges {
            node {
              image {
                gatsbyImageData(width: 1600, placeholder: BLURRED, formats: [WEBP])
              }
            }
          }
        }
      }
    `}
    render={(data: Data) => (
      <CategoryContainer>
        <LeftCategory>
          <BackgroundImage
            alt=""
            image={data.allContentfulHomePageImage.edges[1].node.image.gatsbyImageData}
          />
          <CategoryLink>
            <Link to={routes.travels}>
              <AngleRight /> Voyages
            </Link>
          </CategoryLink>
        </LeftCategory>
        <WhiteSeparator />
        <RightCategory>
          <BackgroundImage
            alt=""
            image={data.allContentfulHomePageImage.edges[0].node.image.gatsbyImageData}
          />
          <CategoryLink>
            <Link to={routes.web}>
              <AngleRight /> Web <AngleLeft />
            </Link>
          </CategoryLink>
        </RightCategory>
      </CategoryContainer>
    )}
  />
)

export default Categories
