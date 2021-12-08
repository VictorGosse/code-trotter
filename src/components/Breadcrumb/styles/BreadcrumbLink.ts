import styled from 'styled-components'

import Link from '../../Link'

const BreadcrumbLink = styled(Link)`
  &:visited {
    color: ${({ theme }) => theme.components.link.color};
  }
`

export default BreadcrumbLink
