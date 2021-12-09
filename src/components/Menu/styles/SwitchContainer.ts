import styled from 'styled-components'

const SwitchContainer = styled('div')`
  position: absolute;
  right: ${({ theme }) => theme.spaces.s1};
  top: ${({ theme }) => theme.spaces.s2};
`

export default SwitchContainer
