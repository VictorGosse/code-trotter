import styled from 'styled-components'

const ImageLegend = styled('span')`
  text-align: center;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fonts.fontSize.fs12};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.fw500};
  line-height: ${({ theme }) => theme.fonts.lineHeight.lh14};
  color: ${({ theme }) => theme.colors.silver};
  margin-top: 15px;
  margin-bottom: 25px;
  display: block;
`

export default ImageLegend