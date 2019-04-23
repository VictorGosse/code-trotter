import styled from 'styled-components'

const Figure = styled('figure')`
  width: 120%;
  margin-left: -10%;
  margin-top: ${({ theme }) => theme.spaces.s1_5};
  margin-bottom: ${({ theme }) => theme.spaces.s1_5};
  height: auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
    margin-left: 0;
  }
`

export default Figure