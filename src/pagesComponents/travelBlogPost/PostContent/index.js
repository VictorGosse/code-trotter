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
  margin: 35px auto 10px auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Header3 = styled(AttiHeader3)`
  width: ${({ theme }) => theme.travelBlogPostWidth};
  margin: 35px auto 10px auto;
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
  margin: 30px auto;
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
`

export {
  Header2,
  Header3,
  Image,
  Link,
  Separator,
  Text,
}