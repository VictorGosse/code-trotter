import styled from 'styled-components'
import { Container } from 'atti-components'

const PostContainer = styled(Container)`
  opacity: 0;
  transition: all 1s ease;
  &.visible {
    opacity: 1;
  }
`

export default PostContainer
