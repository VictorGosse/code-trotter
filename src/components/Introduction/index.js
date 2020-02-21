import React from 'react'
import { Header1 } from 'atti-components'

const Introduction = ({ title }) => (
  <>
    <Header1 textAlign="center" pt="65px" mb="25px">{title}</Header1>
    {process.env.IFRAME}
    <hr />
  </>
)

export default Introduction
