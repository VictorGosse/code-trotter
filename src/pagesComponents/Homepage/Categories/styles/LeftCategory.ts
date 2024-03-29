import styled from 'styled-components'

import CategoryLink from './CategoryLink'

const LeftCategory = styled('div')`
  width: 60%;
  float: left;
  height: 100%;
  position: absolute;
  z-index: 2;
  -webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  display: flex;
  align-items: center;
  overflow: hidden;
  &:after {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    -webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  }

  ${CategoryLink} {
    margin-left: 15%;
    margin-bottom: 13%;
    svg {
      opacity: 0;
      margin-left: ${({ theme }) => `-${theme.spaces.s1}`};
      transition: all ease 0.5s;
      height: 35px;
      margin-right: ${({ theme }) => theme.spaces.s0_75};
      fill: currentColor;
    }
    &:hover {
      svg {
        opacity: 1;
        margin-left: 0;
      }
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
      margin-left: ${({ theme }) => theme.spaces.s0_75};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
    height: 500px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    top: 0;
    justify-content: center;
    &:after {
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
      clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    }
    ${CategoryLink} {
      margin: 0;
    }
  }
`

export default LeftCategory
