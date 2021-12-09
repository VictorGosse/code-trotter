import styled, { css } from 'styled-components'

const BreadcrumbSeparator = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fontFamily.primary};
    font-size: 14px;
    font-weight: 100;
    margin-left: ${theme.spaces.s0_5};
    margin-right: ${theme.spaces.s0_5};
  `}
`

export default BreadcrumbSeparator
