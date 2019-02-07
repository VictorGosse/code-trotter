import styled from 'styled-components'
import Img from 'gatsby-image'

const ProfilePicture = styled(Img)`
  border-radius: 50%;
  object-fit: cover;
  height: 90px;
  width: 90px;
  min-height: 90px;
  min-width: 90px;
  flex-grow: 1;
`

export default ProfilePicture