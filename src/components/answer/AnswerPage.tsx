import { useAnswer } from "../../hooks/useAnswer"


const AnswerPage = () => {

  const {answer} = useAnswer()

  console.log(answer)
  return (
    <div>Answer</div>
  )
}

export default AnswerPage
