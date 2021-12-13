import styled, { css } from 'styled-components'
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image'

const getImageSize = (ratio: number) => {
  if (ratio < 1) {
    return css`
      width: 50%;
      margin-left: auto;
      margin-right: auto;
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 80%;
      }
    `
  } else {
    return css`
      width: 120%;
      margin-left: -10%;
      height: auto;
      @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 100%;
        margin-left: 0;
      }
    `
  }
}

const Image = styled(GatsbyImage)<GatsbyImageProps & { ratio: number }>`
  ${({ ratio }) => getImageSize(ratio)};
  object-fit: cover;
  display: block;
  margin-top: ${({ theme }) => theme.spaces.s1_5};
  > span {
    display: block;
  }
`

export default Image
