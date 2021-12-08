import styled from 'styled-components'
import { Text } from '@designSystem'

const DateContainer = styled('div')`
  display: flex;
  align-items: center;
  svg * {
    fill: ${({ theme }) => theme.colors.white};
  }
  ${Text} {
    margin-left: ${({ theme }) => theme.spaces.s0_25};
    color: ${({ theme }) => theme.colors.white};
  }
`

export default DateContainer
