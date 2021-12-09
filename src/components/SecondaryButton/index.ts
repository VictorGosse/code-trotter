import styled, { css } from 'styled-components'
import Link from '../Link'

const SecondaryButton = styled(Link)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.white};
    color: ${theme.colors.white};
    letter-spacing: 0.3rem;
    padding: ${theme.spaces.s0_5} ${theme.spaces.s0_75};
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      border: 1px solid ${theme.colors.white};
    }
  `}
`

export default SecondaryButton
