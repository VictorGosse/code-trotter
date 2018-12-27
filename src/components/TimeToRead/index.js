import React from 'react'
import ReadTime from './styles/ReadTime'

const TimeToRead = ({ timeToRead, withSeparator = true }) => (
  <ReadTime>
    {withSeparator && ' - '} {timeToRead}min de lecture
  </ReadTime>
)

export default React.memo(TimeToRead)