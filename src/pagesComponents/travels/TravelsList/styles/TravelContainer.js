import styled from 'styled-components'

const TravelContainer = styled('article')`
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  padding: 20px;
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