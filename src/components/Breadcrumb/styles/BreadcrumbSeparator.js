import styled, { css } from 'styled-components'

const fonts = css`
  font-size: 14px;
  font-weight: 100;
  font-family: "Roboto";
`

const BreadcrumbSeparator = styled.span`
  ${fonts};
  color: ${({ theme }) => theme.colors.black};
  margin-left: ${({ theme }) => theme.spaces.s0_5};
  margin-right: ${({ theme }) => theme.spaces.s0_5};
`

export default BreadcrumbSeparator
