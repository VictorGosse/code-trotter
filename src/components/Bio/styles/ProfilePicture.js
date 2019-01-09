import styled from 'styled-components'
import { Image } from 'atti-components'

const ProfilePicture = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  height: 90px;
  width: 90px;
  margin-right: 30px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-right: 20px;
  }
`

export default ProfilePicture