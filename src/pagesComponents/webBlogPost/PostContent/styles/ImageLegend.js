import styled from 'styled-components'

const ImageLegend = styled('span')`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs12};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.fw500};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lh14};
  color: ${({ theme }) => theme.colors.silver};
  margin-bottom: 25px;
  margin-top: 10px;
  display: block;
`

export default ImageLegend