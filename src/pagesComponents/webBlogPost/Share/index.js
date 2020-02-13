import React from 'react'
import { Link } from 'atti-components'

import Twitter from '@icons/Twitter'
import routes from '@config/routes'

import ShareContainer from './styles/ShareContainer'

const Share = ({ slug, title }) => (
  <ShareContainer>
    <Twitter /><span>If you liked this article, please <Link target="_blank" rel="noopener noreferrer" href={`https://twitter.com/intent/tweet?text=${title} ${routes.root}${routes.web}${slug} by @VictorGosse`}>share it on Twitter</Link>.</span>
  </ShareContainer>
)

export default Share
