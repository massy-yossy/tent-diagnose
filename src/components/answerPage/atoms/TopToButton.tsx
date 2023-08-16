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
  font-weight: 400;
  border-radius: 34px;
  margin-right: auto;
  margin-left: auto;
`;
export default TopToButton;
