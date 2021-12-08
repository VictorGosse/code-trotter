import styled, { css } from 'styled-components'

import BaseTypography, { BaseTypographyProps } from './BaseTypography'

const Header4 = styled(BaseTypography.withComponent('h4'))<BaseTypographyProps>`
  ${({ theme }) => css`
    color: ${theme.components.header4.color};
    font-family: ${theme.fontFamily.primary};
    font-size: 24px;
    font-weight: 400;
    line-height: 1.2em;
  `}
`

export default Header4
