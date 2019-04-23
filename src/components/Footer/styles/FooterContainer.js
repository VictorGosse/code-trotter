import styled from 'styled-components'
import { Container } from 'atti-components'

const FooterContainer = styled(Container.withComponent('footer'))`
  margin-top: ${({ theme }) => theme.spaces.s2};
  margin-bottom: ${({ theme }) => theme.spaces.s0_5};
`

export default FooterContainer