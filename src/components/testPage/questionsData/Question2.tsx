import { FC, memo } from "react";

import TestpageLayout from "../layout/TestpageLayout";
import { css } from "@emotion/react";

const Question2: FC = memo(() => {
  return (
    <TestpageLayout
      title="キャンプに行く時期は？"
      subtitle="When do you go camping?"
      question1="春・秋"
      question2="夏"
      question3="冬"
      buttonSize={buttonSize}
    />
  );
});
const media600 = `
@media screen and (max-width: 600px)
`;

const buttonSize = css`
  width: 200px;
  height: 59px;
  ${media600} {
    width: 200px;
    height: 48px;
  }
`;
export default Question2;
