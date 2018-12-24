import styled from 'styled-components'
import { Header2 } from 'atti-components'

import { Link } from '../../../../components'

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

  ${Link} {
    ${({theme}) => `
      border: 1px solid ${theme.colors.snow};
      color: ${theme.colors.snow};
      padding: ${theme.spaces.s5} ${theme.spaces.s6};
      margin-bottom: ${theme.spaces.s5};
    `}
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
  }
`

export default TextContainer