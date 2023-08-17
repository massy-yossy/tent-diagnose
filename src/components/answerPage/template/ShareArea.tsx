import { FC, memo } from "react";
import { css } from "@emotion/react";
import TopToButton from "../atoms/TopToButton";
import ShareButtons from "../molecules/ShareButtons";

const ShareArea: FC = memo(() => {
  return (
    <div css={container}>
      <div css={wrapper}>
        <p css={text}>
          テキストテキストテキストテキストテキストテキストテキスト
          <br />
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
        </p>
        <ShareButtons />
        <TopToButton />
      </div>
    </div>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;

const container = css`
  background-color: #d1bf79;
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック", "Yu Gothic", sans-serif;
`;
const wrapper = css`
  padding: 36px 0 38px;
  ${media600} {
    padding: 31px 10px;
  }
`;
const text = css`
  text-align: center;
  color: #fff;
  font-size: 16px;
  line-height: calc(26 / 16);
  font-weight: normal;
  margin-bottom: 53px;
  ${media600} {
    margin-bottom: 45px;
    max-width: 320px;
    margin-right: auto;
    margin-left: auto;
  }
`;
export default ShareArea;
