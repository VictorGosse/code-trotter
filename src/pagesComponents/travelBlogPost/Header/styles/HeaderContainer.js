import styled from 'styled-components'

const HeaderContainer = styled('header')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  overflow: hidden;
  position: relative;

  margin-bottom: 24px;
  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
  }
`

export default HeaderContainer