import styled from 'styled-components'
import { 
  Header2 as AttiHeader2, 
  Header3 as AttiHeader3,
  Header4 as AttiHeader4,
  Link as AttiLink,
  Text as AttiText
} from 'atti-components'

import PostImage from './PostImage'

const EM = styled('em')`
  font-style: italic;
`

const Header2 = styled(AttiHeader2)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 50px auto 15px auto;
  font-weight: 700;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Header3 = styled(AttiHeader3)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 30px auto 10px auto;
  line-height: 30px;
  font-size: 28px;
  font-weight: 700;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Header4 = styled(AttiHeader4)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 20px auto 10px auto;
  font-weight: 700;
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

const List = styled(AttiText.withComponent('ul'))`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 15px auto 10px auto;
  display: block;
  list-style-type: disc;
  padding-left: 40px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const ListItem = styled(AttiText.withComponent('li'))`
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
  display: list-item;
`

const Separator = styled('hr')`
  width: 30%;
  margin: 30px auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 50%;
  }
`

const Strong = styled('strong')`
  font-weight: bold;
`

const Text = styled(AttiText)`
  display: block;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: auto;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs16};
  line-height: 28px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Blockquote = styled('blockquote')`
  display: flex;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: 10px auto 10px auto;
  &:before {
    content: ' ';
    display: block;
    width: 5px;
    margin-right: 10px;
    background-color: ${({ theme }) => theme.colors.darkSmoke};
  }
  
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }

  > ${Text} {
    width: 100%;
  }
`

export {
  Blockquote,
  EM,
  Header2,
  Header3,
  Header4,
  Image,
  Link,
  List,
  ListItem,
  Separator,
  Strong,
  Text,
}