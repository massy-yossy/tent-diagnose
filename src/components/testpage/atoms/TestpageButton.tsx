import {FC, memo, ReactNode} from 'react'

type Props = {
  onClick: () => void;
  children: ReactNode;
}

const TestpageButton: FC<Props> = memo((props) => {

  const { onClick, children } = props;

  return (
    <button onClick={onClick}>{children}</button>
  )
})

export default TestpageButton
