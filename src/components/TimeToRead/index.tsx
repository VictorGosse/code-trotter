import React from 'react'
import ReadTime from './styles/ReadTime'

type Props = {
  timeToRead: ChildMarkdownRemark['timeToRead']
  withSeparator?: boolean
}

const TimeToRead = ({ timeToRead, withSeparator = true }: Props) => (
  <ReadTime>
    {withSeparator && ' - '} {timeToRead} min read
  </ReadTime>
)

export default TimeToRead
