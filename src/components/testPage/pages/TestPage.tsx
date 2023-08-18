/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useEffect } from "react";

import { useAnswer } from "../../../hooks/useAnswer";
import { useAnswerpageTransition } from "../../../hooks/useAnswerpageTransition";
import Question1 from "../questionsData/Question1";
import Question2 from "../questionsData/Question2";
import Question3 from "../questionsData/Question3";

const TestPage: FC = memo(() => {
  const { answer } = useAnswer();

  const { answerpageTransition } = useAnswerpageTransition();

  useEffect(() => {
    if (answer.length === 3) {
      answerpageTransition();
    }
  }, [answer]);

  return (
    <>
      {answer.length === 0 && <Question1 />}
      {answer.length === 1 && <Question2 />}
      {answer.length === 2 && <Question3 />}
    </>
  );
});

export default TestPage;
