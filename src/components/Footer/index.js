import React from 'react'
import { Text } from 'atti-components'
import Link from '../Link'

import FooterContainer from './styles/FooterContainer'

const Footer = () => (
  <FooterContainer>
    <hr />
    <Text textAlign="center" mb="s5">Copyright © 2018 Victor Gosse, Tous droits réservés - <Link to="/mentions-legales">Mentions légales</Link></Text>
  </FooterContainer>
)

export default React.memo(Footer)
