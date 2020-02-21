import styled from 'styled-components'

import { visuallyHidden } from '@helpers'
import Slider from './Slider'

const Checkbox = styled('input')`
  ${visuallyHidden};
  &:checked {
    + ${Slider} {
      background-color: ${({ theme }) => theme.colors.supportWarning};
      &:before {
        transform: translateX(calc(${({ theme }) => theme.spaces.s1_5} - 4px));
      }
    }
  }
`

export default Checkbox
