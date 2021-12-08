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
        path: `travels/${edge.node.slug}/`,
        component: path.resolve('src/templates/travelBlogPost.js'),
        context: {
          id: edge.node.id,
          light: true,
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
        path: `web/${edge.node.slug}/`,
        component: path.resolve('src/templates/webBlogPost.tsx'),
        context: {
          id: edge.node.id,
        }
      })
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path === "/") {
    page.context.light = true
    createPage(page)
  }
}
