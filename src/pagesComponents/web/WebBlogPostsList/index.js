import React from 'react'
import { Cell, Grid, Text } from 'atti-components'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'
import { map } from 'lodash'

import routes from '@config/routes'
import ArticleContainer from './styles/ArticleContainer.js'
import ArticleDate from '../ArticleDate'
import ArticleTitle from './styles/ArticleTitle.js'
import DateReadContainer from './styles/DateReadContainer.js'
import { TimeToRead } from '@components'

const WebBlogPostsList = () => (
  <StaticQuery
    query={graphql`
      query WebBlogPosts {
        allContentfulWebBlogPost(sort: {fields: [publicationDate], order: DESC} ) {
          edges{
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
    render={data => (
      <Grid>
        <Cell cols={[[1, 7], [1, 7], [4, 10]]}>
          {map(data.allContentfulWebBlogPost.edges, ({node}) => (
            <ArticleContainer key={node.slug}>
              <ArticleTitle><Link to={`${routes.web}${node.slug}/`}>{node.title}</Link></ArticleTitle>
              <Text>{node.content.childMarkdownRemark.excerpt}</Text>
              <DateReadContainer>
                <ArticleDate publicationDate={node.publicationDate} publicationDateFormatted={node.publicationDateFormatted} />
                <TimeToRead timeToRead={node.content.childMarkdownRemark.timeToRead} />
              </DateReadContainer>
            </ArticleContainer>
          ))}
        </Cell>
      </Grid>
    )}
  />
)

export default WebBlogPostsList
