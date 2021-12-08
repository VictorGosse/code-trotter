import styled, { css } from 'styled-components'

import { resetCSS } from '@helpers'

import { display, DisplayProps, layout, LayoutProps, spacing, SpacingProps } from '../helpers'

export type BaseTypographyProps = {
  textAlign?: 'center' | 'initial' | 'inherit' | 'justify' | 'left' | 'right'
} & DisplayProps &
  LayoutProps &
  SpacingProps

const BaseTypography = styled.p<BaseTypographyProps>`
  ${({ textAlign }) => css`
    ${textAlign && `text-align: ${textAlign};`}
  `}
  ${resetCSS};
  ${display};
  ${layout};
  ${spacing};
`

export default BaseTypography
