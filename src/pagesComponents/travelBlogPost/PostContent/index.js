import styled from 'styled-components'
import { 
  Header2 as AttiHeader2, 
  Header3 as AttiHeader3,
  Link as AttiLink, 
  Text as AttiText
} from 'atti-components'

import PostImage from './PostImage'

const Header2 = styled(AttiHeader2)`
  width: ${({ theme }) => theme.travelBlogPostWidth};
  margin: ${({ theme }) => theme.spaces.s2} auto ${({ theme }) => theme.spaces.s0_75} auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Header3 = styled(AttiHeader3)`
  width: ${({ theme }) => theme.travelBlogPostWidth};
  margin: ${({ theme }) => theme.spaces.s2} auto ${({ theme }) => theme.spaces.s0_75} auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Image = styled(PostImage)`
`

const Link = styled(AttiLink).attrs({ target: '_blank', rel: 'noopener noreferrer' })`
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
`

const Separator = styled('hr')`
  width: 30%;
  margin: ${({ theme }) => theme.spaces.s2} auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 50%;
  }
`

const Text = styled(AttiText)`
  display: block;
  width: ${({ theme }) => theme.travelBlogPostWidth};
  margin: auto;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }

  strong {
    font-weight: 700;
  }
`

export {
  Header2,
  Header3,
  Image,
  Link,
  Separator,
  Text,
}