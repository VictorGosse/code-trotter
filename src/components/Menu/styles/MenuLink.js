import styled from 'styled-components'
import Link from '../../Link'

const MenuLink = styled(Link)`
  text-transform: uppercase;
  margin: 0 15px;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  &:hover {
    border-bottom-color: currentColor;
  }
`

export default MenuLink