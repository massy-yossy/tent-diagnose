import { FC, memo } from "react";

import { css } from "@emotion/react";

const footer = css`
  font-family: "genEi", sans-serif;
  text-align: center;
  padding-bottom: 28px;
`;

const text = css`
  font-size: 14px;
  margin-bottom: 26px;
  color: #413f3f;
`;
const link = css`
  color: #413f3f;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 26px;
  transition: all .3s;
  &:hover{
    opacity: .7;
  }
`;


type Props = {
  className?: string
}

const Footer: FC<Props> = memo(({className}) => {
  return (
    <footer className={className} css={footer}>
      <p css={text}>企画・診断制作：株式会社OUTRIP</p>
      <a css={link} href="">
        ＜＜ お問い合わせ ＞＞
      </a>
      <p>
        <small>&copy;2023 mypace outdoor.All Rights Reserved</small>
      </p>
    </footer>
  );
});

export default Footer;
