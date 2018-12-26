import styled from 'styled-components'

import CategoryLink from './CategoryLink'

const RightCategory = styled('div')`
  width: 60%;
  float: right;
  background-color: red;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url('${({ image }) => image}');
  background-size: cover;
  background-position: center;
  position: relative;
  &:after {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  ${CategoryLink} {
    margin-right: 15%;
    margin-top: 13%;
    svg {
      opacity: 0;
      transition: all ease 0.5s;
      height: 35px;
      fill: currentColor;
      &:first-child {
        margin-right: 10px;
        margin-left: -15px;
      }
      &:last-child {
        margin-left: 10px;
        margin-right: -15px;
      }
    }
    &:hover {
      svg {
        &:first-child {
          display: none;
          @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: inline-block;
            opacity: 1;
            margin-left: 0px;
          }
        }
        &:last-child {
          opacity: 1;
          margin-right: 0px;
          @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
            display: none;
          }
        }
      }
    }
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-right: 10px;
    }
  }
  
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 500px;
    margin-top: calc(500px - 10%);
    justify-content: center;
    ${CategoryLink} {
      margin: 0;
    }
  }
`

export default RightCategory