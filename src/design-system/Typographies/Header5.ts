import styled, { css } from 'styled-components'

import BaseTypography, { BaseTypographyProps } from './BaseTypography'

const Header5 = styled(BaseTypography.withComponent('h5'))<BaseTypographyProps>`
  ${({ theme }) => css`
    color: ${theme.components.header5.color};
    font-family: ${theme.fontFamily.primary};
    font-size: 20px;
    font-weight: 400;
    line-height: 1.2em;
  `}
`

export default Header5
