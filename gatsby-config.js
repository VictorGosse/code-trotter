const path = require('path')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { CONTENTFUL_SPACEID, CONTENTFUL_ACCESS_TOKEN } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Code-trotter',
    author: 'Victor Gosse',
    description: 'You\'ll find here some articles about my trips and some technical posts about Web, development, project management, ...',
    siteUrl: 'https://code-trotter.com/',
    social: {
      twitter: '@VictorGosse',
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-force-trailing-slashes`,
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACEID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        //host: `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: `${__dirname}/src/components/Layout/index.js`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulWebBlogPost } }) => {
              return allContentfulWebBlogPost.edges.map(edge => {
                return Object.assign({}, {
                  title: edge.node.title,
                  description: edge.node.content.childMarkdownRemark.excerpt,
                  date: edge.node.publicationDate,
                  url: site.siteMetadata.siteUrl + "web/" + edge.node.slug + "/",
                  guid: site.siteMetadata.siteUrl + "web/" + edge.node.slug + "/",
                  custom_elements: [{ 'content:encoded': edge.node.content.childMarkdownRemark.html }]
                })
              })
            },
            query: `
              {
                allContentfulWebBlogPost(sort: {fields: [publicationDate], order: DESC} ) {
                  edges {
                    node {
                      title
                      slug
                      publicationDate: publicationDate(formatString: "YYYY-MM-DD")
                      content {
                        childMarkdownRemark{
                          excerpt(pruneLength: 280)
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Code-trotter RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': path.resolve(__dirname, 'src/components'),
          '@config': path.resolve(__dirname, 'src/config'),
          '@helpers': path.resolve(__dirname, 'src/helpers'),
          '@icons': path.resolve(__dirname, 'src/icons'),
          '@images': path.resolve(__dirname, 'src/images'),
          '@pagesComponents': path.resolve(__dirname, 'src/pagesComponents'),
        }
      }
    }
  ],
}
