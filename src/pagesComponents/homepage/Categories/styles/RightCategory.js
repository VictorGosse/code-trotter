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
    margin-right: 50px;
  }
`

export default RightCategory