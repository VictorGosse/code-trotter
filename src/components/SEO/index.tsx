import React from 'react'
import Helmet from 'react-helmet'

import favicon from '../../images/favicon.png'

type Props = {
  description: string
  extraMeta?: Array<{ content: string | string[]; name: string }>
  image?: string
  lang?: string
  title: string
  type?: string
  url?: string
}

const SEO = ({
  description,
  extraMeta = [],
  image = '',
  lang = 'fr',
  url = '',
  title,
  type = 'website',
}: Props) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    titleTemplate={`%s | Code-trotter`}
    link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        name: 'og:image',
        content: image,
      },
      {
        property: 'og:site_name',
        content: 'code-trotter',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:type',
        content: type,
      },
      {
        name: 'og:url',
        content: url,
      },
      {
        name: 'title',
        content: title,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:creator',
        content: '@VictorGosse',
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: image,
      },
      {
        name: 'twitter:site',
        content: '@VictorGosse',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:url',
        content: url,
      },
      ...(extraMeta as {
        content: string
        name: string
      }[]),
    ]}
  />
)

export default SEO
