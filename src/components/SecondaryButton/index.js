import styled from 'styled-components'
import Link from '../Link'

const SecondaryButton = styled(Link)`
  ${({theme}) => `
    border: 1px solid ${theme.colors.snow};
    color: ${theme.colors.snow};
    padding: ${theme.spaces.s5} ${theme.spaces.s6};
  `}
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  &:hover {
    ${({theme}) => `
      border: 1px solid ${theme.colors.snow};
    `}
  }
`

export default SecondaryButton