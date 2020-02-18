import styled from 'styled-components'
import {
  Link as AttiLink,
  Text as AttiText
} from 'atti-components'


const Link = styled(AttiLink).attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  line-height: 16px;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
`

const Text = styled(AttiText)`
  margin-top: ${({ theme }) => theme.spaces.s0_75};
  line-height: 32px;
  font-size:  ${({ theme }) => theme.fonts.fontSize.fs16};
`

export {
  Link,
  Text,
}
