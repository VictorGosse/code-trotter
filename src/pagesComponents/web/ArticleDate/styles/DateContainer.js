import styled from 'styled-components'
import { Text } from 'atti-components'

const DateContainer = styled(Text.withComponent('time'))`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.tertiary};
  margin-top: 5px;
  svg {
    margin-right: 10px;
    fill: currentColor;
  }
`

export default DateContainer