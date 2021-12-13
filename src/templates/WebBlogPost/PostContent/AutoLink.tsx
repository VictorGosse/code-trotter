import React from 'react'
import { ExternalLink, InternalLink } from './styles'

type Props = {
  children: React.ReactNode
  href: string
}

const AutoLink = ({ children, href }: Props) =>
  href.startsWith('/') ? (
    <InternalLink to={href}>{children}</InternalLink>
  ) : (
    <ExternalLink href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </ExternalLink>
  )

export default AutoLink
