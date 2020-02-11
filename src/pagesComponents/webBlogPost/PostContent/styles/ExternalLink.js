import styled from 'styled-components'
import { Link } from 'atti-components'

const ExternalLink = styled(Link)`
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
`

export default ExternalLink
