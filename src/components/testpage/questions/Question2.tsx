import TestpageLayout from "../layout/TestpageLayout";

const Question2 = () => {
  return (
    <TestpageLayout
      title={<>キャンプに行く時期は？</>}
      subtitle={<>When do you go camping?</>}
      question1={<>春・秋</>}
      question2={<>夏</>}
      question3={<>冬</>}
    />
  );
};

export default Question2;
