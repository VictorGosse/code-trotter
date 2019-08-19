import styled from 'styled-components'
import { Header2 } from 'atti-components'

import { SecondaryButton } from '@components'

const TextContainer = styled('div')`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Header2} {
    ${({theme}) => `
      color: ${theme.colors.white};
      font-size: ${theme.fonts.fontSize.fs48};
      line-height: ${theme.fonts.lineHeight.lh56};
      font-weight: ${theme.fonts.fontWeight.fw700};
      margin-bottom: ${theme.spaces.s0_25};
    `}
    text-transform: uppercase;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spaces.s0_25};
  }
  ${SecondaryButton} {
    margin-top: ${({ theme }) => theme.spaces.s1_5};
    animation: all ease 1s;
  }
`

export default TextContainer