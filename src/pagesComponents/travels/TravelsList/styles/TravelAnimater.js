import styled from 'styled-components'

import { SecondaryButton } from '@components'

const TravelAnimater = styled('div')`
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: ${({ w }) => w !== 0 ? `${w}px` : '100%'};
  height: 450px;
  opacity: 1;
  transition: opacity ease 0.9s;
  &.animation {
    transition: all ease 0.9s;
  }
  &.animated {
    width: 100% !important;
    height: 75vh !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 5 !important;
    ${SecondaryButton} {
      opacity: 0;
      margin-top: 0;
    }
  }
  &.hide {
    opacity: 0;
  }
`

export default TravelAnimater