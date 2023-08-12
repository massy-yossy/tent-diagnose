import TestpageLayout from "../layout/TestpageLayout";

const Question1 = () => {
  return (
    <TestpageLayout
      title={<>何人でキャンプに行きますか？</>}
      subtitle={<>How many people are you going camping with?</>}
      question1={<>ソロキャンプ<br />（1人）</>}
      question2={<>グループキャンプ<br />（2~3人）</>}
      question3={<>ソロキャンプ<br />（3人以上）</>}
    />
  );
};

export default Question1;
