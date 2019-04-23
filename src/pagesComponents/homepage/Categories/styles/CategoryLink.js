import styled from 'styled-components'
import { Header1 } from 'atti-components'

const CategoryLink = styled(Header1)`
  color: white;
  z-index: 15;
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  padding: ${({ theme }) => theme.spaces.s1} ${({ theme }) => theme.spaces.s1_5};
  transition: all ease 0.3s;
  &:hover, &:focus, &:active {
    background-color: white;
    color: black;
  }
  a {
    display: inline-flex;
    align-items: center;
  }
`

export default CategoryLink