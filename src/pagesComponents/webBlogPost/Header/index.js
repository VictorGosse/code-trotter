import React from 'react'
import { Helmet } from 'react-helmet'

import { Breadcrumb, TimeToRead } from '@components'
import routes from '@config/routes'
import ArticleTitle from './styles/ArticleTitle'
import ArticleDate from '../ArticleDate'
import DateReadContainer from './styles/DateReadContainer'
import InfoContainer from './styles/InfoContainer'

const Header = ({ article }) => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "${routes.root}"
            },{
              "@type": "ListItem",
              "position": 2,
              "name": "Web",
              "item": "${routes.root}${routes.web}"
            },{
              "@type": "ListItem",
              "position": 3,
              "name": "${article.title}",
              "item": "${routes.root}${routes.web}${article.slug}/"
            }]
          }
        `}
      </script>
    </Helmet>
    <ArticleTitle>{article.title}</ArticleTitle>
    <InfoContainer>
      <Breadcrumb
        elements={[
          { name: 'Home', url: routes.homepage },
          { name: 'Web', url: routes.web },
          { name: article.title },
        ]}
        separator=">"
      />
      <DateReadContainer>
        <ArticleDate
          publicationDate={article.publicationDate}
          publicationDateFormatted={article.publicationDateFormatted}
        />
        <TimeToRead timeToRead={article.content.childMarkdownRemark.timeToRead} />
      </DateReadContainer>
    </InfoContainer>
  </>
)

export default Header
