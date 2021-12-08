import styled from 'styled-components'
import { Text } from '@designSystem'

const DateContainer = styled(Text.withComponent('time'))`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-right: ${({ theme }) => theme.spaces.s0_25};
  svg {
    margin-right: ${({ theme }) => theme.spaces.s0_75};
    fill: currentColor;
  }
`

export default DateContainer
