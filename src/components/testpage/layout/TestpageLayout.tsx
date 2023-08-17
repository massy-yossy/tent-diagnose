import { FC, memo } from "react";

import { tentpageType } from "../../../types/tentpageType";
import StepLine from "../organisms/StepLine";
import { css } from "@emotion/react";
import ButtonContainer from "../molecules/ButtonContainer";
import SideTentLayout from "../../layout/SideTentLayout";
import Footer from "../../templates/footer/Footer";

const TestpageLayout: FC<tentpageType> = memo((props) => {
  const { title, subtitle, question1, question2, question3, buttonSize } =
    props;

  return (
    <SideTentLayout>
      <main css={main}>
        <div css={container}>
          <StepLine />
          <h2 css={titleStyle}>{title}</h2>
          <p css={subtitleStyle}>{subtitle}</p>
          <ButtonContainer
            question1={question1}
            question2={question2}
            question3={question3}
            buttonSize={buttonSize}
          />
        </div>
      </main>
      <Footer css={footer} />
    </SideTentLayout>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;

// メイン
const main = css`
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "genEi", sans-serif;
`;
const container = css`
  margin-top: -30px;
`;
// タイトル
const titleStyle = css`
  font-size: 30px;
  line-height: calc(40 / 30);
  font-weight: normal;
  margin-bottom: 18px;
  ${media600} {
    font-size: 24px;
    line-height: calc(32 / 24);
    margin-bottom: 13px;
  }
`;
const subtitleStyle = css`
  font-size: 20px;
  margin-bottom: 57px;
  line-height: calc(27 / 20);
  ${media600} {
    font-size: 12px;
    line-height: calc(16 / 12);
    margin-bottom: 57px;
  }
`;
//footer
const footer = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export default TestpageLayout;
