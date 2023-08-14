import {FC, memo} from "react"

import TestpageLayout from "../layout/TestpageLayout";
import { css } from "@emotion/react";

const Question3: FC = memo(() => {
  return (
    <TestpageLayout
      title="テントに求めるものは？"
      subtitle="What do you look for in a tent?"
      question1="とにかく安い"
      question2="長く使える耐久性"
      question3="デザイン性"
      buttonSize={buttonSize}
    />
  );
});

const buttonSize = css`
width: 311px;
height: 59px;
`

export default Question3;
