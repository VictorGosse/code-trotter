import styled from 'styled-components'

const Image = styled('img')`
  width: 120%;
  margin-left: -10%;
  margin-top: 25px;
  height: auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin-left: 0;
  }
`

export default Image