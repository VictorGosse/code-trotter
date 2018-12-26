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
`

export default WhiteSeparator