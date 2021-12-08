import styled from 'styled-components'

const CurrentElement = styled.span`
  font-size: ${({ theme }) => theme.components.text.fontSize};
  font-weight: 100;
  font-family: 'Roboto';
  color: ${({ theme }) => theme.colors.black};
`

export default CurrentElement
