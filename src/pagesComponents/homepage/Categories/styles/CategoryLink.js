import styled from 'styled-components'
import { Header1 } from 'atti-components'

const CategoryLink = styled(Header1)`
  color: white;
  z-index: 15;
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: 15px 25px;
  transition: all ease 0.3s;
  &:hover, &:focus, &:active {
    background-color: white;
    color: black;
  }
  a {
    display: inline-flex;
    align-items: center;
    svg {
      height: 35px;
      margin-right: 10px;
      fill: currentColor;
    }
  }
`

export default CategoryLink