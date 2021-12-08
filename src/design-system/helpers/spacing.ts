import { css, Theme } from 'styled-components'

export type SpacingProps = {
  mb?: keyof Theme['spaces'] | string
  ml?: keyof Theme['spaces'] | string
  mr?: keyof Theme['spaces'] | string
  mt?: keyof Theme['spaces'] | string
  pb?: keyof Theme['spaces'] | string
  pl?: keyof Theme['spaces'] | string
  pr?: keyof Theme['spaces'] | string
  pt?: keyof Theme['spaces'] | string
}

export default css<SpacingProps>`
  ${({ mb, ml, mr, mt, pb, pl, pr, pt, theme }) => css`
    ${mb && `margin-bottom: ${theme.spaces[mb as keyof Theme['spaces']] || mb};`};
    ${ml && `margin-left: ${theme.spaces[ml as keyof Theme['spaces']] || ml};`};
    ${mr && `margin-right: ${theme.spaces[mr as keyof Theme['spaces']] || mr};`};
    ${mt && `margin-top: ${theme.spaces[mt as keyof Theme['spaces']] || mt};`};
    ${pb && `padding-bottom: ${theme.spaces[pb as keyof Theme['spaces']] || pb};`};
    ${pl && `padding-left: ${theme.spaces[pl as keyof Theme['spaces']] || pl};`};
    ${pr && `padding-right: ${theme.spaces[pr as keyof Theme['spaces']] || pr};`};
    ${pt && `padding-top: ${theme.spaces[pt as keyof Theme['spaces']] || pt};`};
  `}
`
