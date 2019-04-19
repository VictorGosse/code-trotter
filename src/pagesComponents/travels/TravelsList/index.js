import React, { useState } from 'react'
import { Header2 } from 'atti-components'
import { StaticQuery, graphql } from 'gatsby'
import { map } from 'lodash'

import HeroImage from './styles/HeroImage.js'
import TextContainer from './styles/TextContainer.js'
import TravelAnimater from './styles/TravelAnimater.js'
import TravelContainer from './styles/TravelContainer.js'
import { SecondaryButton, TravelDates } from '@components'
import routes from '@config/routes'

const someCustomDefinedAnimation = (exit, node, e, setPositions) => {
  const article = e.target.parentNode.parentNode
  const articleContainer = article.parentNode
  const previous = articleContainer.previousSibling
  const pos = article.getBoundingClientRect()

  article.style.margin = "0"
  articleContainer.style.position = "fixed"
  previous.style.height = `${pos.height + 32}px`

  setPositions({
    top: pos.top,
    left: pos.left,
    width: pos.width,
    height: pos.height,
  })
  
  setTimeout(function() {
    articleContainer.classList.add('animation')
    articleContainer.classList.add('animated')
    map(document.querySelectorAll(".travelAnimater:not(.animated)"), (elem) => (
      elem.classList.add("hide")
    ))
  }, 50)
}

const TravelsList = () => {
  const [positions, setPositions] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })

  return (
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
                    ...GatsbyContentfulFluid_withWebp
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
              <>
                <div></div>
                <TravelAnimater 
                  className="travelAnimater" 
                  top={positions.top} 
                  left={positions.left} 
                  w={positions.width} 
                  h={positions.height}
                >
                  <TravelContainer key={node.slug}>
                    <HeroImage fluid={node.heroImage.fluid} alt="" />
                    <TextContainer>
                      <Header2>{node.title}</Header2>
                      <TravelDates startDate={node.startDate} endDate={node.endDate} />
                      <SecondaryButton 
                        exit={{ 
                          length: 1,
                          trigger: ({ exit, node, e }) => someCustomDefinedAnimation(exit, node, e, setPositions)
                        }} 
                        entry={{ delay: 1 }}
                        to={`${routes.travels}/${node.slug}`}
                      >
                        Lire l'article
                      </SecondaryButton>
                    </TextContainer>
                  </TravelContainer>
                </TravelAnimater>
              </>
            ))}
          </>
        )
      }
    />
  )
    }

export default React.memo(TravelsList)
