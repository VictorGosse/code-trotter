import React from 'react'

import Calendar from '@icons/Calendar'
import DateContainer from './styles/DateContainer'

const ArticleDate = ({ publicationDate, publicationDateFormatted }) => (
  <DateContainer datetime={publicationDateFormatted}>
    <Calendar width="18px" height="18px" />
    {publicationDate}
  </DateContainer>
)

export default ArticleDate
