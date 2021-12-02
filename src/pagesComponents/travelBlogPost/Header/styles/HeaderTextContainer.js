import styled, {css} from 'styled-components'
import { Container, Header1 } from 'atti-components'

const HeaderTextContainer = styled(Container)`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 300px 0;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    margin: 120px 0 80px 0;
  }

  ${Header1} {
    ${({theme}) => css`
      color: ${theme.colors.white};
      font-size: ${theme.fonts.fontSize.fs48};
      line-height: ${theme.fonts.lineHeight.lh56};
      font-weight: ${theme.fonts.fontWeight.fw700};
      margin-bottom: ${theme.spaces.s1};

      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
          font-size: 32px;
          line-height: 42px;
      }
    `}
    text-transform: uppercase;
    text-align: center;
  }
`

export default HeaderTextContainer
