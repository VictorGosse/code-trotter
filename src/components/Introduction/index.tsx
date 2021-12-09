import React from 'react'
import { Header1 } from '@designSystem'

type Props = {
  title: string
}

const Introduction = ({ title }: Props) => (
  <>
    <Header1 textAlign="center" pt="65px" mb="25px">
      {title}
    </Header1>
    <hr />
  </>
)

export default Introduction
