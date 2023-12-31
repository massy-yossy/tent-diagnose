import { FC, memo } from "react";
import { affilierDataType } from "../../../types/affilierDataType";
import AffilierItem from "../molecules/AffilierItem";
import { css } from "@emotion/react";

type Props = {
  affilierData: affilierDataType[];
};

const SuggestTent: FC<Props> = memo((props) => {
  const { affilierData } = props;
  return (
    <div css={container}>
      <h2 css={affTitle}>あなたにおすすめのテント</h2>
      <span></span>
      <div css={affContainer}>
        {affilierData.map((data) => (
          <AffilierItem data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;

const container = css`
  max-width: 1528px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 109px;
  ${media600} {
    padding: 0 10px;
    margin-bottom: 47px;
  }
`;
const affContainer = css`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
  ${media600} {
    gap: 21px;
  }
`;
const affTitle = css`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  line-height: calc(40 / 25);
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック", "Yu Gothic", sans-serif;
  position: relative;
  margin-bottom: 76px;
  &::before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 20px 12px 0 12px;
    border-color: #dd7c72 transparent transparent transparent;
    top: 63px;
    left: 50%;
    transform: translateX(-50%);
    ${media600} {
      border-width: 13px 8px 0 8px;
      top: 50px;
    }
  }
  ${media600} {
    font-size: 22px;
    line-height: calc(36 / 22);
    margin-bottom: 81px;
  }
`;
export default SuggestTent;
