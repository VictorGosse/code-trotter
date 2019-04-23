import styled from 'styled-components'
import { Text } from 'atti-components'

const DateReadContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.s0_25};
  
  ${Text} {
    font-size: 14px;
  }
`

export default DateReadContainer