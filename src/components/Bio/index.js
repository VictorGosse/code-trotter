import React from 'react'
import { Link } from 'atti-components'

import BioContainer from './styles/BioContainer'
import Name from './styles/Name'
import ProfileContainer from './styles/ProfileContainer'
import ProfilePicture from './styles/ProfilePicture'

import favicon from '../../images/profile.png'

const Bio = () => (
  <BioContainer>
    <ProfilePicture src={favicon} />
    <ProfileContainer>
      <Name>Victor Gosse</Name>
      <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/VictorGosse">@VictorGosse</Link><br />
      I work at <Link target="_blank" rel="noopener noreferrer" href="https://www.attineos.com">Attineos</Link> since 2015 as a front-end developer. This blog is mine and I'll be very happy to discuss about it with you in DM on Twitter.
    </ProfileContainer>
  </BioContainer>
)

export default Bio