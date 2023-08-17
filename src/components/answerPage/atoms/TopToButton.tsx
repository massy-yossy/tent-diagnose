import { css } from "@emotion/react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";

const TopToButton: FC = memo(() => {
  return (
    <Link css={buttonStyle} to="/">
      診断TOPに戻る
    </Link>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;

const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 254px;
  height: 67px;
  background-color: #305a30;
  font-size: 20px;
  font-family: "genEi", sans-serif;
  color: #fff;
  font-weight: normal;
  border-radius: 34px;
  margin-right: auto;
  margin-left: auto;
  ${media600}
  {
    height: 53px;
    font-size: 18px;
  }
`;
export default TopToButton;
