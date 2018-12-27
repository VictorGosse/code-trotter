import React from 'react'

import Calendar from '@icons/Calendar.js'
import DateContainer from './styles/DateContainer.js'

const ArticleDate = ({ publicationDate, publicationDateFormatted }) => (
  <DateContainer datetime={publicationDateFormatted}>
    <Calendar width="18px" height="18px" />
    { publicationDate }
  </DateContainer>
)

export default React.memo(ArticleDate)