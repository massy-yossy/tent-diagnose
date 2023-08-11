import { useNavigate } from "react-router-dom"
import { useAnswer } from "./useAnswer";
import { TentDataKey } from "../types/TentDataKey";
import { AnswerTentData } from "../tentData/AnswerTentDate";

export const useAnswerpageTransition = () =>{
  const navigate = useNavigate();
  const { answer } = useAnswer();

  const answerpageTransition = () => {

  const key = answer.join('') as TentDataKey;

  const answerPageUrl = AnswerTentData[key];

  navigate(answerPageUrl)
  }

  return {answerpageTransition}
}
