import { FC, memo } from "react";
import TestpageButton from "../atoms/TestpageButton";
import { useAnswerAddArray } from "../../../hooks/useAnswerAddArray";
import { tentpageType } from "../../../types/tentpageType";

const TestpageLayout: FC<tentpageType> = memo((props) => {
  const { title, subtitle, question1, question2, question3 } = props;

  const { onClickAddAnswerType } = useAnswerAddArray();

  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div>
        <TestpageButton onClick={() => onClickAddAnswerType("a")}>
          {question1}
        </TestpageButton>
        <TestpageButton onClick={() => onClickAddAnswerType("b")}>
          {question2}
        </TestpageButton>
        <TestpageButton onClick={() => onClickAddAnswerType("c")}>
          {question3}
        </TestpageButton>
      </div>
    </div>
  );
});

export default TestpageLayout;
