import { FC, memo } from "react";
import { answerpageType } from "../../../types/answerpageType";
import Logo from "../../atoms/Logo";
import { css } from "@emotion/react";
import SuggestTent from "../template/SuggestTent";
import ShareArea from "../template/ShareArea";

const AnswerPageLayout: FC<answerpageType> = memo((props) => {
  const {
    tentName,
    tentComment,
    image,
    features,
    goodPoint,
    importantPoint,
    affilierData,
  } = props;

  return (
    <>
      <div css={container}>
        <div css={logoWrapper}>
          <Logo css={logo} />
        </div>
        <main css={maincontainer}>
          <p css={beginningText}>
            ご回答お疲れ様でした！
            <br />
            以下で、あなたにおすすめのテントタイプが分かります
          </p>
          <div css={backgroundArea}>
            <div css={mainArea}>
              <div css={mainImge}>
                <img src={image} alt="テントイラスト" />
              </div>
              <div css={mainTextArea}>
                <p css={mainText}>
                  あなたにおすすめの
                  <br />
                  テントタイプは…
                </p>
                <h1 css={mainTitle}>「{tentName}」</h1>
                <div css={comment}>{tentComment}</div>
              </div>
            </div>
          </div>
          <article css={article}>
            <section>
              <h2 css={sectionTitle}>{tentName}とは</h2>
              <div css={sectionText}>{features}</div>
            </section>
            <section>
              <h2 css={sectionTitle}>良いところ</h2>
              <div css={sectionText}>{goodPoint}</div>
            </section>
            <section>
              <h2 css={sectionTitle}>注意点</h2>
              <div css={sectionText}>{importantPoint}</div>
            </section>
          </article>
        </main>
        <SuggestTent affilierData={affilierData} />
      </div>
      <ShareArea />
    </>
  );
});
//全体の色
const container = css`
  background-color: rgba(255, 254, 243, 0.7);
  overflow-x: hidden;
`;
// ロゴ
const logoWrapper = css`
  max-width: 1920px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
`;
const logo = css`
  top: 27px;
  left: 36px;
`;
// メインの横幅指定
const maincontainer = css`
  max-width: 798px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 139px;
  padding-bottom: 59px;
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック", "Yu Gothic", sans-serif;
`;
// 冒頭文
const beginningText = css`
  text-align: center;
  font-size: 18px;
  line-height: calc(29 / 18);
  margin-bottom: 62px;
`;
// メインエリアの背景指定
const backgroundArea = css`
  box-sizing: border-box;
  background-color: #d1bf79;
  width: 100svw;
  margin: 0 calc(50% - 50svw);
`;
// おすすめのメイン
const mainArea = css`
  max-width: 798px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  gap: 33px;
`;
const mainImge = css`
  flex-shrink: 0;
  height: 365px;
  width: 365px;
  object-fit: cover;
`;
const mainTextArea = css`
  padding-top: 38px;
`;
const mainText = css`
  color: #fff;
  font-size: 20px;
  line-height: calc(32 / 20);
  margin-bottom: 20px;
`;
const mainTitle = css`
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  line-height: calc(65 / 40);
  font-feature-settings: "palt";
  margin-bottom: 26px;
`;
const comment = css`
  width: 321px;
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 17px 9px 18px;
  line-height: calc(25 / 16);
`;
// 下の記事っぽいとこ
const article = css`
  padding-top: 30px;
`;
const sectionTitle = css`
  font-size: 20px;
  font-weight: bold;
  background-color: #305a30;
  width: fit-content;
  color: #fff;
  padding: 12px 18px;
  text-align: center;
  min-width: 237px;
`;
const sectionText = css`
  padding: 34px 0 40px;
  font-size: 16px;
  line-height: 180%;
  ul {
    margin: 25px 0;
    li {
      padding-left: 16px;
      margin-bottom: 5px;
      position: relative;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 5px;
        height: 5px;
        background-color: #d1bf79;
        border-radius: 50%;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  }
`;
export default AnswerPageLayout;
