import styled from 'styled-components'

const Slider = styled('div')`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transition: .3s;
  border-radius: 34px;
  &:before {
    position: absolute;
    background-color: ${({ theme }) => theme.colors.white};
    content: " ";
    height: calc(${({ theme }) => theme.spaces.s1_5} - 4px);
    width: calc(${({ theme }) => theme.spaces.s1_5} - 4px);
    bottom: 2px;
    left: 4px;
    transition: .3s;
    border-radius: 50%;
  }
`

export default Slider
