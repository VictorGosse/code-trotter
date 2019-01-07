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
  
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 20px 12px;
    ${MenuLink}:first-child {
      margin-left: 0;
    }
    div ${MenuLink}:last-child {
      margin-right: 0;
    }
  }
`

export default MenuContainer