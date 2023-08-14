import {FC, memo, ReactNode} from 'react';

import { css } from "@emotion/react"

type Props = {
  onClick: () => void;
  children: ReactNode;
}

const buttonStyle = css`
  
`

const TestpageButton: FC<Props> = memo((props) => {

  const { onClick, children } = props;

  return (
    <button css={buttonStyle} onClick={onClick}>{children}</button>
  )
})

export default TestpageButton
