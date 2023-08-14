import {FC, memo, ReactNode} from 'react';

import { css } from "@emotion/react"

type Props = {
  onClick: () => void;
  children: ReactNode;
  className? : string;
}

const buttonStyle = css`

`

const TestpageButton: FC<Props> = memo((props) => {

  const { onClick, children, className } = props;

  return (
    <button className={className} css={buttonStyle} onClick={onClick}>{children}</button>
  )
})

export default TestpageButton
