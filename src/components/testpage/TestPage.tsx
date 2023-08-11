import { FC, memo, useEffect } from "react";

import Footer from "../footer/Footer";
import { useAnswer } from "../../hooks/useAnswer";
import { useAnswerAddArray } from "../../hooks/useAnswerAddArray";
import { useAnswerpageTransition } from "../../hooks/useAnswerpageTransition";

const TestPage: FC = memo(() => {
  const { answer } = useAnswer();

  const { onClickAddAnswerType } = useAnswerAddArray();

  const { answerpageTransition } = useAnswerpageTransition()

  useEffect(() => {
    if(answer.length === 3){
      answerpageTransition()
    }
  },[answer])

  return (
    <main>
      {answer.length === 0 && (
        <div>
          <h2>何人でキャンプに行く？</h2>
          <p>How many people are you going camping with?</p>
          <div>
            <button onClick={() => onClickAddAnswerType("a")}>１人</button>
            <button onClick={() => onClickAddAnswerType("b")}>２人</button>
            <button onClick={() => onClickAddAnswerType("c")}>３～５人</button>
          </div>
        </div>
      )}
      {answer.length === 1 && (
        <div>
          <h2>キャンプに行く時期は？</h2>
          <p>How many people are you going camping with?</p>
          <div>
            <button onClick={() => onClickAddAnswerType("a")}>春</button>
            <button onClick={() => onClickAddAnswerType("b")}>夏</button>
            <button onClick={() => onClickAddAnswerType("c")}>冬</button>
          </div>
        </div>
      )}
      {answer.length === 2 && (
        <div>
          <h2>テントに求めることは？</h2>
          <p>How many people are you going camping with?</p>
          <div>
            <button onClick={() => onClickAddAnswerType("a")}>機能</button>
            <button onClick={() => onClickAddAnswerType("b")}>おしゃれ</button>
            <button onClick={() => onClickAddAnswerType("c")}>価格</button>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
});

export default TestPage;
