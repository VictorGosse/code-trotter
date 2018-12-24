import styled from 'styled-components'

const HeaderContainer = styled('header')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;

  margin-bottom: ${({ theme }) => theme.spaces.s10};
`

export default HeaderContainer