import styled, { css } from 'styled-components'

import BaseTypography, { BaseTypographyProps } from './BaseTypography'

const Header1 = styled(BaseTypography.withComponent('h1'))<BaseTypographyProps>`
  ${({ theme }) => css`
    color: ${theme.components.header1.color};
    font-family: ${theme.fontFamily.primary};
    font-size: 48px;
    font-weight: 700;
    line-height: 1em;
    @media only screen and (max-width: ${theme.breakpoints.mobileMax}) {
      font-size: 48px;
    }
  `}
`

export default Header1
