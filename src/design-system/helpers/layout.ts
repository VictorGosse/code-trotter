import { css, Theme } from 'styled-components'

/**
 * Inject this style into your component so it can support layout sizing props from the theme or custom sizes :
 * - h (height)
 * - maxH (max-height)
 * - minH (min-height)
 * - w (width)
 * - maxW (max-width)
 * - minW (min-width)
 */
export type LayoutProps = {
  h?: keyof Theme['spaces'] | string
  maxH?: keyof Theme['spaces'] | string
  maxW?: keyof Theme['spaces'] | string
  minH?: keyof Theme['spaces'] | string
  minW?: keyof Theme['spaces'] | string
  w?: keyof Theme['spaces'] | string
}

export default css<LayoutProps>`
  ${({ h, maxH, maxW, minH, minW, theme, w }) => css`
    ${h && `height: ${theme.spaces[h as keyof Theme['spaces']] || h};`};
    ${maxH && `max-height: ${theme.spaces[maxH as keyof Theme['spaces']] || maxH};`};
    ${minH && `min-height: ${theme.spaces[minH as keyof Theme['spaces']] || minH};`};
    ${w && `width: ${theme.spaces[w as keyof Theme['spaces']] || w};`};
    ${maxW && `max-width: ${theme.spaces[maxW as keyof Theme['spaces']] || maxW};`};
    ${minW && `min-width: ${theme.spaces[minW as keyof Theme['spaces']] || minW};`};
  `}
`
