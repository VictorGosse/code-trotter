import React, { useEffect } from 'react'
import { graphql } from 'gatsby'

import { Layout, SEO } from '@components'
import renderAst from '@helpers/renderAstTravels'
import { Breadcrumb, Header } from '@pagesComponents/travelBlogPost'
import { PostContainer } from '@pagesComponents/travelBlogPost/styles'
import AssetContext from '@pagesComponents/travelBlogPost/Context/asset-context.js'


const Travel = ({ data }) => {

  useEffect(() => {
    setTimeout(function() {
      const post = document.querySelector(".postContainer")
      if (post) {
        post.classList.add("visible")
      }
    }, 50)
  })

  return (
    <Layout light>
      <SEO 
        description={data.contentfulBlogPost.description.description}
        title={data.contentfulBlogPost.title}
      />
      <Header data={data.contentfulBlogPost} />
      <PostContainer className="postContainer">
        <Breadcrumb title={data.contentfulBlogPost.title} />
        <article>
          <AssetContext.Provider value={data.allContentfulAsset}>
            {renderAst(data.contentfulBlogPost.body.childMarkdownRemark.htmlAst)}
          </AssetContext.Provider>
        </article>
      </PostContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    contentfulBlogPost(id: {eq: $id}) {
      title
      startDate: startDate(formatString: "DD/MM/YYYY")
      endDate: endDate(formatString: "DD/MM/YYYY")
      heroImage {
        fluid(quality: 100, maxWidth: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      place
      slug
      description {
        description
      }
      body {
        childMarkdownRemark{
          htmlAst
        }
      }
    }
    allContentfulAsset {
      edges {
        node {
          file {
            url
          }
          fluid(quality: 100, maxWidth: 1600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default React.memo(Travel)
