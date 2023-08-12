import AnswerPageLayout from "../../layout/AnswerPageLayout";

const OnepollCheap = () => {
  return (
    <div>
      <AnswerPageLayout
        tentname={<div>ワンポールテント</div>}
        image="./images/logo.png"
        features={<>ワンポールでできてます</>}
        goodPoint={<>組み立て簡単</>}
        importantPoint={<>値段が高い</>}
      />
    </div>
  );
};

export default OnepollCheap;
