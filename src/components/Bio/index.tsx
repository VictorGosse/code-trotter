import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import BioContainer from './styles/BioContainer'
import Name from './styles/Name'
import ProfileContainer from './styles/ProfileContainer'
import ProfilePicture from './styles/ProfilePicture'

import { Link } from '@designSystem'
import renderAst from '@helpers/renderAstBio'

type Data = {
  contentfulBio: {
    description: {
      childMarkdownRemark: ChildMarkdownRemark
    }
    name: string
    profilePicture: {
      gatsbyImageData: IGatsbyImageData
    }
    twitter: string
  }
}

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
            gatsbyImageData(width: 1600, placeholder: BLURRED, formats: [WEBP])
          }
        }
      }
    `}
    render={(data: Data) => (
      <BioContainer>
        <ProfilePicture alt="" image={data.contentfulBio.profilePicture.gatsbyImageData} />
        <ProfileContainer>
          <Name>{data.contentfulBio.name}</Name>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={`https://twitter.com/${data.contentfulBio.twitter}`}
          >
            @{data.contentfulBio.twitter}
          </Link>
          <br />
          {renderAst(data.contentfulBio.description.childMarkdownRemark.htmlAst)}
        </ProfileContainer>
      </BioContainer>
    )}
  />
)

export default Bio
