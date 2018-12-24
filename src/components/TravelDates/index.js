import React from 'react'
import { Text } from 'atti-components'

import DateContainer from './styles/DateContainer'
import Calendar from '../../icons/Calendar.js'

const TravelDates = ({startDate, endDate}) => (
  <DateContainer>
    <Calendar width="18px" height="18px" />
    <Text>{startDate} - {endDate}</Text>
  </DateContainer>
)

export default React.memo(TravelDates)