import styled from 'styled-components'
import { Header2 } from 'atti-components'

import { SecondaryButton } from '@components'

const TextContainer = styled('div')`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Header2} {
    ${({theme}) => `
      color: ${theme.colors.snow};
      font-size: ${theme.fonts.fontSize.fs48};
      line-height: ${theme.fonts.lineHeight.lh56};
      font-weight: ${theme.fonts.fontWeight.fw700};
      margin-bottom: ${theme.spaces.s3};
    `}
    text-transform: uppercase;
    text-align: center;

  }

  ${SecondaryButton} {
    margin-bottom: ${({theme}) => theme.spaces.s5};
  }
`

export default TextContainer