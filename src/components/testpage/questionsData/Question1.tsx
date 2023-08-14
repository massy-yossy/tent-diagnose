import {FC, memo} from "react"
import { css } from "@emotion/react";
import TestpageLayout from "../layout/TestpageLayout";

const Question1: FC = memo(() => {
  return (
    <TestpageLayout
      title="何人でキャンプに行く？"
      subtitle="How many people are you going camping with?"
      question1="ソロキャンプ（1人）"
      question2="グループキャンプ（2～3人）"
      question3="ファミリーキャンプ（3人以上）"
      buttonSize={buttonSize}
    />
  );
});

const buttonSize = css`
width: 311px;
height: 59px;
`

export default Question1;
