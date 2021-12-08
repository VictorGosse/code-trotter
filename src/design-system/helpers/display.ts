import { isNil } from 'lodash'
import { css } from 'styled-components'

export type DisplayProps = {
  /** Container property : 'align-content' CSS property. */
  ac?:
    | 'end'
    | 'e'
    | 'flex-start'
    | 'fs'
    | 'flex-end'
    | 'fe'
    | 'center'
    | 'ce'
    | 'space-between'
    | 'sb'
    | 'space-around'
    | 'sa'
    | 'start'
    | 'st'
    | 'stretch'
    | 's'
  /** Container property : 'align-items' CSS property. */
  ai?:
    | 'end'
    | 'e'
    | 'flex-start'
    | 'fs'
    | 'flex-end'
    | 'fe'
    | 'center'
    | 'ce'
    | 'baseline'
    | 'b'
    | 'start'
    | 'st'
    | 'stretch'
    | 's'
  /** Item property : 'align-self' CSS property. */
  als?:
    | 'auto'
    | 'end'
    | 'e'
    | 'flex-start'
    | 'fs'
    | 'flex-end'
    | 'fe'
    | 'center'
    | 'ce'
    | 'baseline'
    | 'b'
    | 'start'
    | 'st'
    | 'stretch'
    | 's'
  /** Display CSS property. */
  di?: 'b' | 'block' | 'ib' | 'inline-block' | 'if' | 'inline-flex' | 'f' | 'flex'
  /** Item property : 'flex-basis' CSS property. */
  fb?: number | string | 'auto'
  /** Container property : 'flex-direction' CSS property. */
  fd?: 'row' | 'r' | 'row-reverse' | 'rr' | 'column' | 'c' | 'column-reverse' | 'cr'
  /** Item property : 'flex-grow' CSS property. */
  fg?: number
  /** Item property : 'flex-shrink' CSS property. */
  fs?: number
  /** Container property : 'flex-wrap' CSS property. */
  fw?: 'nowrap' | 'nw' | 'wrap' | 'w' | 'wrap-reverse' | 'wr'
  /** Container property : 'justify-content' CSS property. */
  jc?:
    | 'end'
    | 'e'
    | 'flex-start'
    | 'fs'
    | 'flex-end'
    | 'fe'
    | 'center'
    | 'ce'
    | 'space-between'
    | 'sb'
    | 'space-around'
    | 'sa'
    | 'space-evenly'
    | 'se'
    | 'start'
    | 'st'
  /** Item property : 'justify-self' CSS property. */
  js?:
    | 'auto'
    | 'end'
    | 'e'
    | 'flex-start'
    | 'fs'
    | 'flex-end'
    | 'fe'
    | 'center'
    | 'ce'
    | 'baseline'
    | 'b'
    | 'start'
    | 'st'
    | 'stretch'
    | 's'
  /** Item property : 'order' CSS property. */
  or?: number
}

const displayMap = {
  b: 'block',
  ib: 'inline-block',
  if: 'inline-flex',
  f: 'flex',
}

const resolvedMap = {
  b: 'baseline',
  c: 'column',
  cr: 'column-reverse',
  ce: 'center',
  e: 'end',
  fe: 'flex-end',
  fs: 'flex-start',
  nw: 'nowrap',
  r: 'row',
  rr: 'row-reverse',
  s: 'stretch',
  sa: 'space-around',
  sb: 'space-between',
  se: 'space-evenly',
  st: 'start',
  w: 'wrap',
  wr: 'wrap-reverse',
}

/**
 * Inject this style into your component so it can support display props :
 * - ac for align-content
 * - ai for align-items
 * - als for align-self
 * - di for display type
 * - fb for flex-basis
 * - fd for flex-direction
 * - fg for flex-grow
 * - fs for flex-shrink
 * - fw for flew-wrap
 * - jc for justify-content
 * - or for order
 */
export default ({ ac, ai, als, di, fb, fd, fg, fs, fw, jc, js, or }: DisplayProps) => css`
  ${ac && `align-content: ${resolvedMap[ac as keyof typeof resolvedMap] || ac}`};
  ${ai && `align-items: ${resolvedMap[ai as keyof typeof resolvedMap] || ai}`};
  ${als && `align-self: ${resolvedMap[als as keyof typeof resolvedMap] || als}`};
  ${di && `display: ${displayMap[di as keyof typeof displayMap] || di}`};
  ${!isNil(fb) && `flex-basis: ${fb}`};
  ${fd && `flex-direction: ${resolvedMap[fd as keyof typeof resolvedMap] || fd}`};
  ${!isNil(fg) && `flex-grow: ${fg}`};
  ${!isNil(fs) && `flex-shrink: ${fs}`};
  ${fw && `flex-wrap: ${resolvedMap[fw as keyof typeof resolvedMap] || fw}`};
  ${jc && `justify-content: ${resolvedMap[jc as keyof typeof resolvedMap] || jc}`};
  ${js && `justify-self: ${resolvedMap[js as keyof typeof resolvedMap] || js}`};
  ${!isNil(or) && `order: ${or}`};
`
