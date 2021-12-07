import styled from 'styled-components'
import Link from '../Link'

const SecondaryButton = styled(Link)`
  ${({ theme }) => `
    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};
    padding: ${theme.spaces.s0_5} ${theme.spaces.s0_75};
  `}
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  &:hover {
    ${({ theme }) => `
      border: 1px solid ${theme.colors.white};
    `}
  }
`

export default SecondaryButton
