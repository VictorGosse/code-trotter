import styled, { css } from 'styled-components'

const fonts = css`
  font-size: 14px;
  font-weight: 100;
  font-family: "Roboto";
`

const BreadcrumbSeparator = styled.span`
  ${fonts};
  color: ${({ theme }) => theme.colors.black};
  margin-left: 8px;
  margin-right: 8px;
`

export default BreadcrumbSeparator
