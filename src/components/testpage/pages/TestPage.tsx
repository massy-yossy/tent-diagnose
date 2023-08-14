/* eslint-disable react-hooks/exhaustive-deps */
import { FC, memo, useEffect } from "react";

import { useAnswer } from "../../../hooks/useAnswer";
import { useAnswerpageTransition } from "../../../hooks/useAnswerpageTransition";
import Question1 from "../questions/Question1";
import Question2 from "../questions/Question2";
import Question3 from "../questions/Question3";

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
      <main>
        {answer.length === 0 && <Question1 />}
        {answer.length === 1 && <Question2 />}
        {answer.length === 2 && <Question3 />}
      </main>
    </>
  );
});

export default TestPage;
