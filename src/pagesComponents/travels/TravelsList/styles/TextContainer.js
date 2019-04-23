import styled from 'styled-components'
import { Header2 } from 'atti-components'

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
      margin-bottom: 4px;
    `}
    text-transform: uppercase;
    text-align: center;

  }
`

export default TextContainer