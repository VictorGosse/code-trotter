import React from 'react'

import { Breadcrumb, TimeToRead } from '@components'
import routes from '@config/routes'
import ArticleTitle from './styles/ArticleTitle'
import ArticleDate from '../ArticleDate'
import DateReadContainer from './styles/DateReadContainer'
import InfoContainer from './styles/InfoContainer'

const Header = ({ article }) => (
  <>
    <ArticleTitle>{article.title}</ArticleTitle>
    <InfoContainer>
      <Breadcrumb
        elements={[
          { name: 'Home', url: routes.homepage },
          { name: 'Web', url: routes.web },
          { name: article.title },
        ]}
        separator='>'
      />
      <DateReadContainer>
        <ArticleDate publicationDate={article.publicationDate} publicationDateFormatted={article.publicationDateFormatted} />
        <TimeToRead timeToRead={article.content.childMarkdownRemark.timeToRead} />
      </DateReadContainer>
    </InfoContainer>
  </>
)

export default React.memo(Header)