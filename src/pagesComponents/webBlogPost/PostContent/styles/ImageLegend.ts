import styled from 'styled-components'

const ImageLegend = styled('span')`
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.silver};
  margin-bottom: ${({ theme }) => theme.spaces.s1_5};
  margin-top: ${({ theme }) => theme.spaces.s0_75};
  display: block;
`

export default ImageLegend
