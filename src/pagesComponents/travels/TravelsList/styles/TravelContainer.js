import styled from 'styled-components'

const TravelContainer = styled('article')`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
`

export default TravelContainer