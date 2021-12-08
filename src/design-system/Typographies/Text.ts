import styled, { css } from 'styled-components'

import BaseTypography, {BaseTypographyProps} from './BaseTypography'

const Text = styled(BaseTypography) <BaseTypographyProps>`
  ${({ theme }) => css`
    color: ${theme.components.text.color};
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.components.text.fontSize};
    font-weight: 400;
    line-height: ${theme.components.text.lineHeight};
  `}
`

export default Text
