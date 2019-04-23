import styled from 'styled-components'
import { Link } from 'atti-components'

import Name from './Name'

const ProfileContainer = styled('div')`
  line-height: 22px;
  margin-left: ${({ theme }) => theme.spaces.s2};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin-left: ${({ theme }) => theme.spaces.s1_5};
  }
  ${Link}, ${Name} {
    line-height: 16px;
    font-size: 14px;
  }
  ${Link} {
    display: inline-block;
  }
`

export default ProfileContainer