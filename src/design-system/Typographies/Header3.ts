import styled, { css } from 'styled-components'

import BaseTypography, { BaseTypographyProps } from './BaseTypography'

const Header3 = styled(BaseTypography.withComponent('h3'))<BaseTypographyProps>`
  ${({ theme }) => css`
    color: ${theme.components.header3.color};
    font-family: ${theme.fontFamily.primary};
    font-size: 36px;
    font-weight: 400;
    line-height: 1.1em;
    @media only screen and (max-width: ${theme.breakpoints.mobileMax}) {
      font-size: 30px;
    }
  `}
`

export default Header3
