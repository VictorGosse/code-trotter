import 'styled-components'
import { defaultTheme } from 'config/themes'

declare module 'styled-components' {
  type Theme = typeof defaultTheme
  // This is what we want: types will be infered
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
