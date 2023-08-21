import { css } from '@emotion/react'
import {FC, memo, ReactNode} from 'react'



const StyleTextRed: FC<{children: ReactNode}> = memo(({children}) => {
  return (
    <span css={textRed}>{children}</span>
  )
})
const textRed = css`
  font-weight: bold;
  color: red;
`

export default StyleTextRed
