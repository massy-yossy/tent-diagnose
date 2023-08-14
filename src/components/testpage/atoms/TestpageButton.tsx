import { FC, memo, ReactNode } from "react";

import { css, SerializedStyles } from "@emotion/react";

type Props = {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  buttonSize: SerializedStyles
};

const TestpageButton: FC<Props> = memo((props) => {
  const { onClick, children, buttonSize } = props;

  return (
    <button css={[buttonStyle, buttonSize]} onClick={onClick}>
      {children}
    </button>
  );
});


const media600 = `
@media screen and (max-width: 600px)
`;

const buttonStyle = css`
  background: linear-gradient(90deg, #60b84a, #2f4e2c);
  color: #fff;
  border-radius: 30px;
  display: block;
  cursor: pointer;
  font-size: 18px;
  ${media600}
  {
    font-size: 15px;
  }
`;

export default TestpageButton;
