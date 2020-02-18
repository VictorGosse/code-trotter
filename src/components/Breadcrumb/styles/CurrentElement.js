import styled, { css } from 'styled-components'

const fonts = css`
  font-size: ${({ theme }) => theme.components.text.normal.fonts.fontSize};
  font-weight: 100;
  font-family: "Roboto";
`

const CurrentElement = styled.span`
  ${fonts};
  color: ${({ theme }) => theme.colors.slate};
`

export default CurrentElement
