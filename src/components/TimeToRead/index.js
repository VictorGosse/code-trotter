import React from 'react'
import ReadTime from './styles/ReadTime'

const TimeToRead = ({ timeToRead, withSeparator = true }) => (
  <ReadTime>
    {withSeparator && ' - '} {timeToRead} min read
  </ReadTime>
)

export default React.memo(TimeToRead)