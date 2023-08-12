import { useNavigate } from "react-router-dom";
import { useAnswer } from "./useAnswer";
import { AnswerDataUrl } from "../tentData/AnswerDataUrl";

export const useAnswerpageTransition = () => {
  const navigate = useNavigate();
  const { answer } = useAnswer();

  const answerpageTransition = () => {
    const key = answer.join("");

    const answerPageUrl = AnswerDataUrl[key];

    navigate(answerPageUrl);
  };

  return { answerpageTransition };
};
