import styled, { css } from 'styled-components'
import { Container, Header1 } from '@designSystem'

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
    ${({ theme }) => css`
      color: ${theme.colors.white};
      font-size: 48px;
      line-height: 56px;
      font-weight: 700;
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
