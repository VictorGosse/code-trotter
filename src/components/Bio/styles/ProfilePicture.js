import styled from 'styled-components'
import { Image } from 'atti-components'

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  height: 90px;
  width: 90px;
  min-height: 90px;
  min-width: 90px;
  flex-grow: 1;
`

export default ProfilePicture