import styled from 'styled-components'
import { Link } from 'atti-components'

const GithubLink = styled(Link)`
  margin-right: 6px;
  border-bottom: 0;
  top: 3px;
  position: relative;
  svg path {
    fill: ${({ theme }) => theme.colors.black};
  }
`

export default GithubLink
