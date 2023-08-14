import { FC, memo, Dispatch, SetStateAction } from "react";
import { css } from "@emotion/react";

import Footer from "../templates/footer/Footer";
import SideTentLayout from "../layout/SideTentLayout";
import StartButton from "./molecules/StartButton";

type Props = {
  homePage: boolean;
  setHomePage: Dispatch<SetStateAction<boolean>>;
  testPage: boolean;
  settestPage: Dispatch<SetStateAction<boolean>>;
};

const media1600 = `
@media screen and (max-width: 1600px)
`;
const media990 = `
@media screen and (max-width: 990px)
`;
const media600 = `
@media screen and (max-width: 600px)
`;

//footer
const footer = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;
//main
const main = css`
  margin-right: auto;
  margin-left: auto;
  height: 100svh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const container = css`
  text-align: center;
  font-family: "genEi", sans-serif;
`;
//タイトル
const title = css`
  font-size: 70px;
  font-weight: normal;
  line-height: calc(94 / 70);
  margin-bottom: 16px;
  ${media1600} {
    font-size: 65px;
  }
  ${media600} {
    font-size: 30px;
    line-height: calc(40 / 30);
    margin-bottom: 9px;
  }
`;
//下のテキスト
const text = css`
  color: #413f3f;
  font-size: 22px;
  line-height: calc(30 / 22);
  margin-bottom: 47px;
  ${media1600} {
    font-size: 18px;
    margin-bottom: 20px;
  }
  ${media600} {
    font-size: 14px;
    line-height: calc(19 / 14);
    margin-bottom: 21px;
  }
`;
// 画像
const img = css`
  display: none;
  ${media990} {
    display: block;
    width: 54%;
    margin-right: auto;
    margin-left: auto;
  }
  ${media600} {
    margin-bottom: 28px;
  }
`;
const textUnder = css`
  font-size: 20px;
  margin-bottom: 16px;
  ${media1600} {
    font-size: 16px;
  }
  ${media990} {
    margin-bottom: 16px;
  }
  ${media600} {
    font-size: 12px;
    margin-bottom: 7px;
  }
  `;
const textLast = css`
  margin-bottom: 64px;
  ${media1600} {
    margin-bottom: 54px;
  }
  ${media600} {
    margin-bottom: 45px;
  }
`;

const Startpage: FC<Props> = memo((props) => {
  const { homePage, setHomePage, testPage, settestPage } = props;

  const onClickStart = () => {
    setHomePage(!homePage);
    settestPage(!testPage);
  };

  return (
    <SideTentLayout>
      <main css={main}>
        <div css={container}>
          <h1 css={title}>
            おすすめの<br></br>テントタイプ診断
          </h1>
          <p css={text}>TENT TYPE TEST.</p>
          <div css={img}>
            <img src="./images/tent1.webp" alt="テントイラスト" />
          </div>
          <p css={[text, textUnder]}>キャンプはテント選びがとても重要です</p>
          <p css={[text, textUnder, textLast]}>
            事前に自分に合ったテントを診断しましょう。
          </p>
          <StartButton onClickStart={onClickStart} />
        </div>
      </main>
      <Footer css={footer} />
    </SideTentLayout>
  );
});

export default Startpage;
