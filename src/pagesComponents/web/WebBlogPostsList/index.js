import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import { map } from 'lodash'

import { TimeToRead } from '@components'
import routes from '@config/routes'
import { Container, Text } from '@designSystem'

import ArticleContainer from './styles/ArticleContainer'
import ArticleDate from '../ArticleDate'
import ArticleTitle from './styles/ArticleTitle'
import DateReadContainer from './styles/DateReadContainer'

const WebBlogPostsList = () => (
  <StaticQuery
    query={graphql`
      query WebBlogPosts {
        allContentfulWebBlogPost(sort: { fields: [publicationDate], order: DESC }) {
          edges {
            node {
              title
              slug
              publicationDate: publicationDate(formatString: "DD/MM/YYYY")
              publicationDateFormatted: publicationDate(formatString: "DD-MM-YYYY")
              content {
                childMarkdownRemark {
                  excerpt(pruneLength: 280)
                  timeToRead
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => (
      <Container>
        {map(data.allContentfulWebBlogPost.edges, ({ node }) => (
          <ArticleContainer key={node.slug}>
            <ArticleTitle>
              <Link to={`${routes.web}${node.slug}/`}>{node.title}</Link>
            </ArticleTitle>
            <Text>{node.content.childMarkdownRemark.excerpt}</Text>
            <DateReadContainer>
              <ArticleDate
                publicationDate={node.publicationDate}
                publicationDateFormatted={node.publicationDateFormatted}
              />
              <TimeToRead timeToRead={node.content.childMarkdownRemark.timeToRead} />
            </DateReadContainer>
          </ArticleContainer>
        ))}
      </Container>
    )}
  />
)

export default WebBlogPostsList
