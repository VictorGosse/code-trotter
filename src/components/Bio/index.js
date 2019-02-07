import React from 'react'
import { Link } from 'atti-components'
import { StaticQuery, graphql } from 'gatsby'

import BioContainer from './styles/BioContainer'
import Name from './styles/Name'
import ProfileContainer from './styles/ProfileContainer'
import ProfilePicture from './styles/ProfilePicture'

import renderAst from '@helpers/renderAstBio'

const Bio = () => (
  <StaticQuery
    query={graphql`
      query BioQuery {
        contentfulBio {
          name
          twitter
          description {
            childMarkdownRemark {
              htmlAst
            }
          }
          profilePicture {
            fluid(quality: 100, maxWidth: 1600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => (
      <BioContainer>
        <ProfilePicture alt="" fluid={data.contentfulBio.profilePicture.fluid} />
        <ProfileContainer>
          <Name>{data.contentfulBio.name}</Name>
          <Link target="_blank" rel="noopener noreferrer" href={`https://twitter.com/${data.contentfulBio.twitter}`}>@{data.contentfulBio.twitter}</Link><br />
          {renderAst(data.contentfulBio.description.childMarkdownRemark.htmlAst)}
        </ProfileContainer>
      </BioContainer>
    )}
  />
)

export default Bio