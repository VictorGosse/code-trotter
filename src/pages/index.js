import React from 'react'

import { SEO } from '@components'
import { useLightMenu } from '@components/Layout/context/LightMenuContext'
import { Categories } from '@pagesComponents/homepage'

const Index = () => {
  useLightMenu().setLightMenu(true)

  return (
    <>
      <SEO
        description="Vous pouvez retrouver ici des articles de mes précédents voyages et des articles techniques liés au web, au développement, à la gestion de projet..."
        keywords={["voyages", "web", "developpement"]}
        title="Les voyages et le web, mes 2 passions"
        extraMeta={[{
          name: 'google-site-verification',
          content: '1E806lu_l9hGS22xEiRG5Y-4iXNHwJqPYEUfwbbWixw',
        }]}
      />
      <Categories />
    </>
  )
}

export default Index
