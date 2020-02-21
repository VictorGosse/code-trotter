import styled from 'styled-components'

const ThemeSwitch = styled('label')`
  display: inline-block;
  position: relative;
  height: ${({ theme }) => theme.spaces.s1_5};
  width: ${({ theme }) => theme.spaces.s3};
`

export default ThemeSwitch
