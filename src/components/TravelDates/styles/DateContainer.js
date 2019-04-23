import styled from 'styled-components'
import { Text } from 'atti-components'

const DateContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 28px;
  svg * {
    fill: ${({ theme }) => theme.colors.white};
  }
  ${Text} {
    margin-left: 4px;
    color: ${({ theme }) => theme.colors.white};
  }
`

export default DateContainer