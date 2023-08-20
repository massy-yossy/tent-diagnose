import { FC, memo, ReactNode } from "react";
import { css } from "@emotion/react";

type Props = {
  affilierLink ?: string;
  children: ReactNode;
  className?: string;
};

const AffilierButton: FC<Props> = memo((props) => {
  const { affilierLink, children, className } = props;

  return (
    <div css={buttonStyle} className={className}>
      <a href={affilierLink} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  );
});
const media600 = `
@media screen and (max-width: 600px)
`;
const buttonStyle = css`
  width: 160px;
  a {
    display: inline-block;
    font-family: "游ゴシック体", YuGothic, "游ゴシック Medium",
      "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #fff;
    line-height: 1;
    width: 100%;
    padding: 11px 0;
    text-align: center;
  }
  ${media600}
  {
    width: 140px;
    a{
      font-size: 12px;
      padding: 6px 0;
    }
  }
`;

export default AffilierButton;
