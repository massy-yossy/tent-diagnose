import { css, keyframes } from "@emotion/react";
import { FC, memo } from "react";

type Props = {
  stepNumber: number;
  answerLength: number;
};

const StepNumberLine: FC<Props> = memo((props) => {
  const { stepNumber, answerLength } = props;
  return (
    <div css={block}>
      <span css={[text, answerLength === stepNumber - 1 && textBold]}>
        STEP 0{stepNumber}
      </span>
      <div
        css={
          stepNumber === 1
            ? [lineWrapper, left]
            : stepNumber === 3
            ? [lineWrapper, right]
            : lineWrapper
        }
      >
        {answerLength >= stepNumber - 1 && (
          <div
            css={[
              line,
              answerLength === stepNumber - 1 && lineAnime,
              stepNumber === 1 ? lineLeft : stepNumber === 3 ? lineRight : {},
            ]}
          ></div>
        )}
      </div>
    </div>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;

const fullLineAnime = keyframes`
  from {
    width: 0%;
  }
  to{
    width: 100%;
  }
`;
const block = css`
  text-align: center;
  width: 209px;
  ${media600} {
    width: 100px;
  }
`;
//テキスト
const text = css`
  font-size: 12px;
  line-height: calc(16 / 12);
  color: #d5d3d3;
  ${media600} {
    font-size: 8px;
    line-height: calc(11 / 8);
  }
`;
const textBold = css`
  color: #2b2a2a;
`;

const lineWrapper = css`
  width: 100%;
  height: 15px;
  border: 1px solid #eaefa7;
  ${media600}
  {
    height: 10px;
  }
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
export default StepNumberLine;
