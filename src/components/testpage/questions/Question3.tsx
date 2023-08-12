import TestpageLayout from "../layout/TestpageLayout";

const Question3 = () => {
  return (
    <TestpageLayout
      title={<>テントに求めることは？</>}
      subtitle={<>What do you look for in a tent?</>}
      question1={<>とにかく安い</>}
      question2={<>長く使える耐久性</>}
      question3={<>デザイン性</>}
    />
  );
};

export default Question3;
