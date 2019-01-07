import React from 'react'
import { Text } from 'atti-components'
import Link from '../Link'

import FooterContainer from './styles/FooterContainer'
import routes from '@config/routes'

const Footer = () => (
  <FooterContainer>
    <hr />
    <Text textAlign="center" mb="s5">Copyright © 2019 Victor Gosse, Tous droits réservés - <Link to={routes.mentionsLegales}>Mentions légales</Link></Text>
  </FooterContainer>
)

export default React.memo(Footer)
