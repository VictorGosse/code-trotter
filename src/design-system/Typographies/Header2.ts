import styled, { css } from 'styled-components'

import BaseTypography, { BaseTypographyProps } from './BaseTypography'

const Header2 = styled(BaseTypography.withComponent('h2'))<BaseTypographyProps>`
  ${({ theme }) => css`
    color: ${theme.components.header2.color};
    font-family: ${theme.fontFamily.primary};
    font-size: 34px;
    font-weight: 500;
    line-height: ${theme.components.header2.lineHeight};
    @media only screen and (max-width: ${theme.breakpoints.mobileMax}) {
      font-size: 36px;
    }
  `}
`

export default Header2
