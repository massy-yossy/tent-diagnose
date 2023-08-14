import { FC, memo } from "react";
import Button from "../atoms/Button";
import { css } from "@emotion/react";

type Props = {
  onClickStart: () => void;
};

const StartButton: FC<Props> = memo((props) => {
  const { onClickStart } = props;

  return (
    <div css={buttonContainer}>
      <span>
        30秒で<br></br>診断！
      </span>
      <Button onClickStart={onClickStart}>診断スタート</Button>
    </div>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;

const buttonContainer = css`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  width: fit-content;
  span {
    position: absolute;
    top: -26px;
    left: -38px;
    text-align: start;
    border-radius: 50%;
    background-color: #f9f226;
    font-size: 15px;
    font-family: "genEi", sans-serif;
    width: 76px;
    height: 76px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1.5px solid #000;
    &::after,
    &::before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 9px;
      height: 1px;
      background-color: #000;
      transform-origin: bottom right;
    }
    &::after {
      transform: rotate(55deg);
      top: 3px;
    }
    &::before {
      transform: rotate(37deg);
      top: 7px;
      left: -5px;
    }
    ${media600} {
      width: 44px;
      height: 44px;
      top: -13px;
      left: -19px;
      font-size: 8px;
      &::after,
      &::before {
        width: 6px;
      }
      &::after{
        top: 2px;
      }
    }
  }
`;
export default StartButton;
