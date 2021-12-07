import styled from 'styled-components'
import { Link } from 'atti-components'

const Anchor = styled(Link)`
  position: absolute;
  font-size: inherit;
  left: -25px;
  line-height: inherit;
  color: inherit;
  opacity: 0.3;

  &:hover,
  &:active,
  &:focus {
    opacity: 1;
    color: inherit;
  }

  &:visited {
    color: inherit;
  }
`

export default Anchor
