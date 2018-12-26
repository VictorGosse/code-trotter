import styled from 'styled-components'

import MenuLink from './MenuLink'

const MenuContainer = styled('nav')`
  padding: 20px 25px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  ${MenuLink} {
    color: ${({ light }) => light ? 'white' : 'black'};
  }
`

export default MenuContainer