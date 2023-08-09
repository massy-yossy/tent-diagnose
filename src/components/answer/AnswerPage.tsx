import { useAnswer } from "../../hooks/useAnswer"
import { AnswerTentData } from "../../tentData/AnswerTentDate";
import { TentDataKey } from "../../types/TentDataKey";



const AnswerPage = () => {

  const { answer } = useAnswer();

  const key = answer.join('') as TentDataKey;

  const AnswerPageCompontent = AnswerTentData[key];

  return (
    <div>
      <AnswerPageCompontent/>
    </div>
  )
}

export default AnswerPage
