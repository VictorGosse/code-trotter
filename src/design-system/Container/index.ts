import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 100%;

    @media only screen and (max-width: ${theme.breakpoints.mobileMax}) {
      max-width: 420px;
      padding: 0 ${theme.spaces.s2};
    }

    @media only screen and (min-width: ${theme.breakpoints.tabletMin}) and (max-width: ${theme
        .breakpoints.tabletMax}) {
      max-width: none;
      padding: 0 ${theme.spaces.s1_5};
    }

    @media only screen and (min-width: ${theme.breakpoints.desktopMin}) {
      max-width: 1280px;
      padding: 0 ${theme.spaces.s1_5};
    }
  `}
`

export default Container
