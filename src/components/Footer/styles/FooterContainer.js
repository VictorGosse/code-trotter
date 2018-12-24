import styled from 'styled-components'
import { Container } from 'atti-components'

const FooterContainer = styled(Container.withComponent('footer'))`
  margin-top: ${({ theme }) => theme.spaces.s12};
`

export default FooterContainer