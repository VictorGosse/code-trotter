import styled from 'styled-components'

import CategoryLink from './CategoryLink'

const RightCategory = styled('div')`
  width: 60%;
  float: right;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  &:after {
    position: absolute;
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }

  ${CategoryLink} {
    right: 0;
    margin-right: 15%;
    margin-top: 13%;
    svg {
      opacity: 0;
      transition: all ease 0.5s;
      height: 35px;
      fill: currentColor;
      &:first-child {
        margin-right: ${({ theme }) => theme.spaces.s0_75};
        margin-left: ${({ theme }) => `-${theme.spaces.s1}`};
      }
      &:last-child {
        margin-left: ${({ theme }) => theme.spaces.s0_75};
        margin-right: ${({ theme }) => `-${theme.spaces.s1}`};
      }
    }
    &:hover {
      svg {
        &:first-child {
          display: none;
          @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            display: inline-block;
            opacity: 1;
            margin-left: 0;
          }
        }
        &:last-child {
          opacity: 1;
          margin-right: 0;
          @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            display: none;
          }
        }
      }
    }
    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      margin-right: ${({ theme }) => theme.spaces.s0_75};
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
    height: 500px;
    margin-top: calc(500px - 10%);
    justify-content: center;
    ${CategoryLink} {
      margin: 0;
      right: auto;
    }
  }
`

export default RightCategory
