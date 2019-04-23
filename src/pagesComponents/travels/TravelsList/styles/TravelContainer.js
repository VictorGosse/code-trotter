import styled from 'styled-components'

const TravelContainer = styled('article')`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spaces.s3} 0;
  padding: ${({ theme }) => theme.spaces.s1_5};
  position: relative;

  &:after {
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`

export default TravelContainer