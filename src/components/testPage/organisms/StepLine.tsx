import { css } from "@emotion/react";
import { FC, memo } from "react";
import { useAnswer } from "../../../hooks/useAnswer";
import StepNumberLine from "../molecules/StepNumberLine";


const StepLine: FC = memo(() => {
  const { answer } = useAnswer();

  return (
    <div css={container}>
      <StepNumberLine  stepNumber={1} answerLength={answer.length}/>
      <StepNumberLine  stepNumber={2} answerLength={answer.length}/>
      <StepNumberLine  stepNumber={3} answerLength={answer.length}/>
    </div>
  );
});



const container = css`
  display: flex;
  gap: 6px;
  margin-bottom: 57px;
`;

export default StepLine;
