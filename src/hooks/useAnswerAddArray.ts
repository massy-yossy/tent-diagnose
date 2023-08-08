import { useCallback } from "react";

import { useAnswer } from "./useAnswer";

export const useAnswerAddArray = () => {
  const { answer, setAnswer } = useAnswer();

  const onClickAddAnswerType = useCallback(
    (type: string) => {
      setAnswer([...answer, type]);
    },
    [answer, setAnswer]
  );

  return { onClickAddAnswerType };
};
