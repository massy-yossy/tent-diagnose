import { css, keyframes } from "@emotion/react";
import { FC, memo } from "react";
import { useAnswer } from "../../../hooks/useAnswer";

const StepLine: FC = memo(() => {
  const { answer } = useAnswer();

  return (
    <div css={container}>
      <div css={block}>
        <span css={[text, answer.length === 0 && textBold]}>STEP 01</span>
        <div css={[lineWrapper, left]}>
          {answer.length >= 0 && <div css={[line, lineLeft, answer.length === 0 && lineAnime]}></div>}
        </div>
      </div>
      <div css={block}>
        <span css={[text, answer.length === 1 && textBold]}>STEP 02</span>
        <div css={lineWrapper}>
          {answer.length >= 1 && <div css={[line, answer.length === 1 && lineAnime]}></div>}
        </div>
      </div>
      <div css={block}>
        <span css={[text, answer.length === 2 && textBold]}>STEP 03</span>
        <div css={[lineWrapper, right]}>
          {answer.length >= 2 && <div css={[line, lineRight, answer.length === 2 && lineAnime]}></div>}
        </div>
      </div>
    </div>
  );
});

const fullLineAnime = keyframes`
  from {
    width: 0%;
  }
  to{
    width: 100%;
  }
`;

const container = css`
  display: flex;
  gap: 6px;
  margin-bottom: 57px;
`;
const block = css`
  text-align: center;
  width: 209px;
`;
//テキスト
const text = css`
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #d5d3d3;
`;
const textBold = css`
  color: #2b2a2a;
`;

const lineWrapper = css`
  width: 100%;
  height: 15px;
  border: 1px solid #eaefa7;
`;
const left = css`
  border-radius: 50px 0 0 50px;
`;
const right = css`
  border-radius: 0 50px 50px 0;
`;

const line = css`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #fed714, #e9890c);
`;

const lineAnime = css`
  animation: ${fullLineAnime} 0.5s forwards;
`;
const lineLeft = css`
  border-radius: 50px 0 0 50px;
`;
const lineRight = css`
  border-radius: 0 50px 50px 0;
`;
export default StepLine;
