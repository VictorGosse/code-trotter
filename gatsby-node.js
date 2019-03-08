const path = require('path')

exports.createPages = async function({ graphql, actions }) {
  const {createPage} = actions
  await graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.allContentfulBlogPost.edges.forEach((edge) => {
      createPage({
        path: `travels/${edge.node.slug}`,
        component: path.resolve('src/templates/travelBlogPost.js'),
        context: {
          id: edge.node.id,
        }
      })
    })
  })

  await graphql(`
    {
      allContentfulWebBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then((result) => {
    result.data.allContentfulWebBlogPost.edges.forEach((edge) => {
      createPage({
        path: `web/${edge.node.slug}`,
        component: path.resolve('src/templates/webBlogPost.js'),
        context: {
          id: edge.node.id,
        }
      })
    })
  })
}