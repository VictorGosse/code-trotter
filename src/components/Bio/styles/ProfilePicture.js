import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

const ProfilePicture = styled(GatsbyImage)`
  border-radius: 50%;
  object-fit: cover;
  height: 120px;
  width: 120px;
  min-height: 120px;
  min-width: 120px;
  flex-grow: 1;
`

export default ProfilePicture
