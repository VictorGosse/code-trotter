import React from 'react'
import { Layout } from '@components'

import { Categories } from '@pagesComponents/homepage'

const Index = () => (
  <Layout light>
    <Categories />
  </Layout>
)

export default React.memo(Index)
