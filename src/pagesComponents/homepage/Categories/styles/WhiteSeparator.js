import styled from 'styled-components'

const WhiteSeparator = styled('div')`
  width: calc(60% + 10px);
  float: left;
  background-color: white;
  height: 100%;
  position: absolute;
  z-index: 1;
  -webkit-clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    float: none;
    height: 510px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  }
`

export default WhiteSeparator