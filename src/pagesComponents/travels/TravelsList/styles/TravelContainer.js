import styled from 'styled-components'

const TravelContainer = styled('article')`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
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
  }
`

export default TravelContainer