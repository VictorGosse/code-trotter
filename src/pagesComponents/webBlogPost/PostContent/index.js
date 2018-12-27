import styled from 'styled-components'
import { 
  Header2 as AttiHeader2, 
  Header3 as AttiHeader3,
  Image as AttiImage,
  Link as AttiLink, 
  Text as AttiText
} from 'atti-components'


const Header2 = styled(AttiHeader2)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 35px auto 10px auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const Header3 = styled(AttiHeader3)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 35px auto 10px auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const Image = styled(AttiImage)`
  width: ${({ theme }) => theme.webBlogPost.extendedWidth};
`

const Link = styled(AttiLink)`
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
`

const Text = styled(AttiText)`
  display: block;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: auto;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

export {
  Header2,
  Header3,
  Image,
  Link,
  Text,
}