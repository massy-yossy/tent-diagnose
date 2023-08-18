import { css } from "@emotion/react";
import { FC, memo } from "react";

const ShareButtons: FC = memo(() => {
  const url = location.href;

  const copyToUrl = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    await navigator.clipboard.writeText(url);
    alert("クリップボードにURLがコピーされました！");
  };

  return (
    <div css={container}>
      <p css={text}>シェアする</p>
      <div css={buttonContainer}>
        <a
          css={twitter}
          href={`http://twitter.com/share?url=${url}&text=あなたにおすすめのテントタイプ診断結果です！`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="./images/twitter.webp" alt="" />
        </a>
        <a
          css={line}
          href={`https://social-plugins.line.me/lineit/share?url=${url}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
          title="LINEに送る"
        >
          <img src="./images/line.svg" alt="LINE" />
        </a>
        <a css={link} href="#" onClick={copyToUrl}>
          <img src="./images/link.png" alt="" />
        </a>
      </div>
    </div>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;

const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 41px;
  margin-bottom: 32px;
  ${media600} {
    margin-bottom: 27px;
    gap: 18px;
    flex-direction: column-reverse;
  }
`;

const text = css`
  font-size: 20px;
  font-family: "genEi", sans-serif;
  color: #fff;
  ${media600} {
    font-size: 18px;
  }
`;
const buttonContainer = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const twitter = css`
  width: 37px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media600} {
    width: 33px;
  }
`;
const line = css`
  width: 39px;
  height: 36px;
  background-image: url(./images/line.png);
  background-size: cover;
  position: relative;
  ${media600} {
    width: 33px;
    height: 31px;
  }
`;
const link = css`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media600}
  {
    width: 23px;
  }
`;
export default ShareButtons;
