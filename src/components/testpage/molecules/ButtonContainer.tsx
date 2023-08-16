import { FC, memo } from "react";
import { css } from "@emotion/react";

import { useAnswerAddArray } from "../../../hooks/useAnswerAddArray";
import { tentpageType } from "../../../types/tentpageType";
import TestpageButton from "../atoms/TestpageButton";

const ButtonContainer: FC<tentpageType> = memo((props) => {
  const { question1, question2, question3, buttonSize } = props;

  const { onClickAddAnswerType } = useAnswerAddArray();

  return (
    <div css={buttonContainer}>
      <TestpageButton
        onClick={() => onClickAddAnswerType("a")}
        buttonSize={buttonSize}
      >
        {question1}
      </TestpageButton>
      <TestpageButton
        onClick={() => onClickAddAnswerType("b")}
        buttonSize={buttonSize}
      >
        {question2}
      </TestpageButton>
      <TestpageButton
        onClick={() => onClickAddAnswerType("c")}
        buttonSize={buttonSize}
      >
        {question3}
      </TestpageButton>
    </div>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;
const buttonContainer = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 34px;
  ${media600} {
    gap: 15px;
  }
`;

export default ButtonContainer;
