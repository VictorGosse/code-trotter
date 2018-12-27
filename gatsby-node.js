const path = require('path')

const createTravelPages = ({ graphql, boundActionCreators }) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/travelBlogPost.js')
    resolve(
      graphql(`
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
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBlogPost.edges.forEach((edge) => {
          createPage ({
            path: `travels/${edge.node.slug}`,
            component: blogPostTemplate,
            context: {
              id: edge.node.id,
            }
          })
        })
        return
      })
    )
  })
}

const createWebPages = ({ graphql, boundActionCreators }) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const webBlogPostTemplate = path.resolve('src/templates/webBlogPost.js')
    resolve(
      graphql(`
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
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulWebBlogPost.edges.forEach((edge) => {
          createPage ({
            path: `web/${edge.node.slug}`,
            component: webBlogPostTemplate,
            context: {
              id: edge.node.id,
            }
          })
        })
        return
      })
    )
  })
}

exports.createPages = (params) => {
  createTravelPages(params)
  createWebPages(params)
}