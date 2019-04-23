import styled from 'styled-components'

import MenuLink from './MenuLink'

const MenuContainer = styled('nav')`
  padding: ${({ theme }) => theme.spaces.s1} ${({ theme }) => theme.spaces.s1_5};
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
  
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: ${({ theme }) => theme.spaces.s1} ${({ theme }) => theme.spaces.s0_75};
    ${MenuLink}:first-child {
      margin-left: 0;
    }
    div ${MenuLink}:last-child {
      margin-right: 0;
    }
  }
`

export default MenuContainer