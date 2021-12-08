import styled, { css } from 'styled-components'
import { Header2 } from '@designSystem'

import { SecondaryButton } from '@components'

const TextContainer = styled('div')`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Header2} {
    ${({ theme }) => css`
      color: ${theme.colors.white};
      font-size: 48px;
      line-height: 56px;
      font-weight: 700;
      margin-bottom: ${theme.spaces.s0_25};
    `}
    text-transform: uppercase;
    text-align: center;
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
      ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: 36px;
        line-height: 48px;
        margin-bottom: ${theme.spaces.s1};
      `}
    }
  }
  ${SecondaryButton} {
    margin-top: ${({ theme }) => theme.spaces.s1_5};
    animation: all ease 1s;
    &:visited {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`

export default TextContainer
