import styled from 'styled-components'
import { Text } from 'atti-components'

const ReadTime = styled(Text)`
  display: inline-block;
  color: ${({ theme }) => theme.colors.slate};
`

export default ReadTime