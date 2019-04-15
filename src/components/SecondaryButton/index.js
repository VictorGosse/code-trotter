import styled from 'styled-components'
import Link from '../Link'

const SecondaryButton = styled(Link)`
  ${({theme}) => `
    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};
    padding: 8px 10px;
  `}
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  &:hover {
    ${({theme}) => `
      border: 1px solid ${theme.colors.white};
    `}
  }
`

export default SecondaryButton