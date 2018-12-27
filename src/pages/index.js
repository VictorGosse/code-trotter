import React from 'react'
import { Layout, SEO } from '@components'

import { Categories } from '@pagesComponents/homepage'

const Index = () => (
  <Layout light>
    <SEO 
      description="Vous pouvez retrouver ici des articles de mes précédents voyages et des articles techniques liés au web, au développement, à la gestion de projet..."
      keywords={["voyages", "web", "developpement"]}
      title="Les voyages et le web, mes 2 passions"
    />
    <Categories />
  </Layout>
)

export default React.memo(Index)
