import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import favicon from '../../images/favicon.png'

const SEO = ({ description, extraMeta, image, lang, url, title, type }) => (
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
      ...extraMeta,
    ]}
  />
)

SEO.defaultProps = {
  extraMeta: [],
  image: '',
  lang: 'fr',
  url: '',
  type: 'website',
}

SEO.propTypes = {
  description: PropTypes.string,
  extraMeta: PropTypes.array,
  image: PropTypes.string,
  lang: PropTypes.string,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default SEO
