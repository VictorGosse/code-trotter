import styled from 'styled-components'
import {
  Header2 as AttiHeader2,
  Header3 as AttiHeader3,
  Header4 as AttiHeader4,
  Header5 as AttiHeader5,
  Text as AttiText
} from 'atti-components'

import AutoLink from './AutoLink'
import PostImage from './PostImage'
import { TitleWithAnchor } from '@components'

const EM = styled('em')`
  font-style: italic;
`

const Header2 = styled(TitleWithAnchor).attrs(() => ({ Compo: AttiHeader2 }))`
  position: relative;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: ${({ theme }) => theme.spaces.s3} auto ${({ theme }) => theme.spaces.s1} auto;
  font-weight: 700;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Header3 = styled(TitleWithAnchor).attrs(() => ({ Compo: AttiHeader3 }))`
  position: relative;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: ${({ theme }) => theme.spaces.s2} auto ${({ theme }) => theme.spaces.s0_75} auto;
  line-height: 30px;
  font-size: 28px;
  font-weight: 700;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Header4 = styled(AttiHeader4)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: ${({ theme }) => theme.spaces.s1_5} auto ${({ theme }) => theme.spaces.s0_75} auto;
  font-weight: 700;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Header5 = styled(AttiHeader5)`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: ${({ theme }) => theme.spaces.s1_5} auto ${({ theme }) => theme.spaces.s0_75} auto;
  font-weight: 700;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Image = styled(PostImage)`
`

const List = styled(AttiText.withComponent('ul'))`
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: ${({ theme }) => theme.spaces.s1} auto ${({ theme }) => theme.spaces.s0_75} auto;
  display: block;
  list-style-type: disc;
  padding-left: ${({ theme }) => theme.spaces.s3};
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
  margin: ${({ theme }) => theme.spaces.s2} auto;
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
  margin-bottom: ${({ theme }) => theme.spaces.s1};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }
`

const Blockquote = styled('blockquote')`
  display: flex;
  width: ${({ theme }) => theme.webBlogPost.basicWidth};
  margin: ${({ theme }) => theme.spaces.s0_75} auto ${({ theme }) => theme.spaces.s0_75} auto;
  &:before {
    content: ' ';
    display: block;
    width: 5px;
    margin-right: ${({ theme }) => theme.spaces.s0_75};
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 100%;
  }

  > ${Text} {
    width: 100%;
    margin-bottom: 0;
  }
`

export {
  AutoLink,
  Blockquote,
  EM,
  Header2,
  Header3,
  Header4,
  Header5,
  Image,
  List,
  ListItem,
  Separator,
  Strong,
  Text,
}
