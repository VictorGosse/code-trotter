import React from 'react'

import Calendar from '@icons/Calendar'
import DateContainer from './styles/DateContainer'

type Props = {
  publicationDate: WebArticle['publicationDate']
  publicationDateFormatted: WebArticle['publicationDateFormatted']
}

const ArticleDate = ({ publicationDate, publicationDateFormatted }: Props) => (
  <DateContainer datetime={publicationDateFormatted}>
    <Calendar width="18px" height="18px" />
    {publicationDate}
  </DateContainer>
)

export default ArticleDate
