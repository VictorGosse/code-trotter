import React from 'react'
import { ExternalLink, InternalLink } from './styles'

const AutoLink = ({ children, href }) => (
  href.startsWith('/') ?
    <InternalLink to={href}>{children}</InternalLink> :
    <ExternalLink href={href} target="_blank" rel="noopener noreferrer">{children}</ExternalLink>
)

export default AutoLink
