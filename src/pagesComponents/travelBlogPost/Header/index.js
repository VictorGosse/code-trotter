import React from 'react'
import { Header1 } from '@designSystem'

import HeaderContainer from './styles/HeaderContainer'
import HeaderTextContainer from './styles/HeaderTextContainer'
import ImageHeader from './styles/ImageHeader'
import { TravelDates } from '@components'

const Header = ({ data }) => (
  <HeaderContainer>
    <ImageHeader image={data.heroImage.gatsbyImageData} alt="" />
    <HeaderTextContainer>
      <Header1 textAlign="center">{data.title}</Header1>
      {data.startDate && data.endDate && (
        <TravelDates startDate={data.startDate} endDate={data.endDate} />
      )}
    </HeaderTextContainer>
  </HeaderContainer>
)

export default Header
