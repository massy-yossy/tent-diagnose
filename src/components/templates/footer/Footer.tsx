import { FC, memo } from "react";

import { css } from "@emotion/react";

const media1600 = `
@media screen and (max-width: 1600px)
`;
const media600 = `
@media screen and (max-width: 600px)
`;

const footer = css`
  font-family: "genEi", sans-serif;
  text-align: center;
  padding-bottom: 28px;
  ${media1600} {
    padding-bottom: 14px;
  }
`;

const text = css`
  font-size: 14px;
  margin-bottom: 26px;
  color: #413f3f;
  ${media1600} {
    margin-bottom: 13px;
  }
  ${media600} {
    font-size: 12px;
  }
  `;
const link = css`
  color: #413f3f;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 26px;
  transition: all 0.3s;
  ${media1600} {
    margin-bottom: 13px;
  }
  ${media600} {
    font-size: 12px;
  }
  &:hover {
    opacity: 0.7;
  }
  `;
const copy = css`
  font-size: 12px;
  color: #A7A3A3;
  ${media600} {
    font-size: 10px;
  }
`

type Props = {
  className?: string;
};

const Footer: FC<Props> = memo(({ className }) => {
  return (
    <footer className={className} css={footer}>
      <p css={text}>企画・診断制作：株式会社OUTRIP</p>
      <a css={link} href="">
        ＜＜ お問い合わせ ＞＞
      </a>
      <p css={copy}>
        <small>&copy;2023 mypace outdoor.All Rights Reserved</small>
      </p>
    </footer>
  );
});

export default Footer;
