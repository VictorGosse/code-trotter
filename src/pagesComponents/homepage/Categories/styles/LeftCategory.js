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
  background-image: url('${({ image }) => image}');
  background-size: cover;
  &:after {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  }

  ${CategoryLink} {
    margin-left: 15%;
    margin-bottom: 13%;
    
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-left: 10px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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