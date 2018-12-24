import styled from 'styled-components'
import { Text } from 'atti-components'

const DateContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spaces.s11};
  svg * {
    fill: ${({ theme }) => theme.colors.snow};
  }
  ${Text} {
    margin-left: ${({ theme }) => theme.spaces.s3};
    color: ${({ theme }) => theme.colors.snow};
  }
`

export default DateContainer