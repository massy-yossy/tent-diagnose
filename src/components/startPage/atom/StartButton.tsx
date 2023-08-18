import { css } from "@emotion/react";
import { FC, memo } from "react";

type Props = {
  onClickStart: () => void;
  children: string;
};

const StartButton: FC<Props> = memo((props) => {
  const { onClickStart, children } = props;

  return (
    <button css={button} onClick={onClickStart}>
      {children}
    </button>
  );
});

const media1600 = `
@media screen and (max-width: 1600px)
`;
const media600 = `
@media screen and (max-width: 600px)
`;

const button = css`
  width: 490px;
  height: 96px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #305A30;
  border-radius: 50px;
  color: #fff;
  font-family: "genEi", sans-serif;
  font-size: 35px;
  font-weight: normal;
  cursor: pointer;
  padding: 0;
  ${media1600} {
    width: 450px;
    height: 86px;
    font-size: 32px;
  }
  ${media600}{
    width: 264px;
    height: 56px;
    font-size: 20px;
  }
`;
export default StartButton;
