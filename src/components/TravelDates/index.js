import React from 'react'
import { Text } from '@designSystem'
import styled from 'styled-components'

import DateContainer from './styles/DateContainer'
import Calendar from '@icons/Calendar'

const TravelDates = ({ className, endDate, startDate }) => (
  <DateContainer className={className}>
    <Calendar width="18px" height="18px" />
    <Text>
      {startDate} - {endDate}
    </Text>
  </DateContainer>
)

export default styled(TravelDates)``
