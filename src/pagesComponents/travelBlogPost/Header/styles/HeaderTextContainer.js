import styled from 'styled-components'
import { Container, Header1 } from 'atti-components'

const HeaderTextContainer = styled(Container)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${Header1} {
    ${({theme}) => `
      color: ${theme.colors.white};
      font-size: ${theme.fonts.fontSize.fs48};
      line-height: ${theme.fonts.lineHeight.lh56};
      font-weight: ${theme.fonts.fontWeight.fw700};
      margin-bottom: ${theme.spaces.s0_25};
    `}
    text-transform: uppercase;
    text-align: center;
  }
`

export default HeaderTextContainer