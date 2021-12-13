type TravelArticle = {
  body: {
    childMarkdownRemark: ChildMarkdownRemark
  }
  description: {
    description: string
  }
  endDate: string
  heroImage: {
    description: string
    gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData
    title: string
  }
  place: string
  slug: string
  startDate: string
  title: string
}
