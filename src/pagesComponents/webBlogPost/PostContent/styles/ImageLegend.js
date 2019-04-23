import styled from 'styled-components'

const ImageLegend = styled('span')`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs12};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.fw500};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lh14};
  color: ${({ theme }) => theme.colors.silver};
  margin-bottom: ${({ theme }) => theme.spaces.s1_5};
  margin-top: ${({ theme }) => theme.spaces.s0_75};
  display: block;
`

export default ImageLegend