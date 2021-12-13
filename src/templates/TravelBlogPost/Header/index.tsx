import React from 'react'
import { Header1 } from '@designSystem'

import HeaderContainer from './styles/HeaderContainer'
import HeaderTextContainer from './styles/HeaderTextContainer'
import ImageHeader from './styles/ImageHeader'
import { TravelDates } from '@components'

type Props = {
  article: TravelArticle
}

const Header = ({ article }: Props) => (
  <HeaderContainer>
    <ImageHeader image={article.heroImage.gatsbyImageData} alt="" />
    <HeaderTextContainer>
      <Header1 textAlign="center">{article.title}</Header1>
      {article.startDate && article.endDate && (
        <TravelDates startDate={article.startDate} endDate={article.endDate} />
      )}
    </HeaderTextContainer>
  </HeaderContainer>
)

export default Header
