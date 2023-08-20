import { FC, memo } from "react";
import { css } from "@emotion/react";

import { affilierDataType } from "../../../types/affilierDataType";
import AffilierButton from "../atoms/AffilierButton";

type Props = {
  data: affilierDataType;
};

const AffilierItem: FC<Props> = memo((props) => {
  const { data } = props;

  return (
    <div key={data.id} css={affContainer}>
      <div css={img}>
        <img src={data.image} alt={data.tentName} />
      </div>
      <div css={textContainer}>
        <div>
          <p css={bland}>{data.blandName}</p>
          <p css={tentName}>{data.tentName}</p>
        </div>
        <div css={buttonContainer}>
          {data.amazon && (
            <AffilierButton css={amazon} affilierLink={data.amazon}>
              Amazon
            </AffilierButton>
          )}
          {data.rakuten && (
            <AffilierButton css={rakuten} affilierLink={data.rakuten}>
              楽天
            </AffilierButton>
          )}
          {data.yahoo && (
            <AffilierButton css={yahoo} affilierLink={data.yahoo}>
              Yahoo!
            </AffilierButton>
          )}
        </div>
      </div>
    </div>
  );
});

const media1600 = `
@media screen and (max-width: 1600px)
`;
const media600 = `
@media screen and (max-width: 600px)
`;

const affContainer = css`
  background-color: #f6f3e4;
  border: 2px solid #707070;
  width: 476px;
  padding: 33px 36px 33px 37px;
  display: flex;
  gap: 30px;
  box-sizing: border-box;
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック", "Yu Gothic", sans-serif;
  ${media1600} {
    width: 450px;
  }
  ${media600} {
    width: 100%;
    padding: 18px 11px 18px 12px;
    gap: 15px;
  }
`;
const img = css`
  flex-shrink: 0;
  width: 195px;
  height: 195px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  ${media600} {
    width: 160px;
    height: 160px;
  }
`;
const textContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 195px;
  ${media600} {
    max-height: 160px;
  }
`;
const bland = css`
  width: fit-content;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 7px 0px;
  margin-bottom: 6px;
  background-color: #b88f1f;
  line-height: 1;
  color: #fff;
  ${media600} {
    font-size: 10px;
  }
`;
const tentName = css`
  font-size: 14px;
  line-height: calc(26 / 16);
  font-weight: bold;
  ${media600} {
    font-size: 12px;
    line-height: calc(26 / 16);
  }
`;
const buttonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const amazon = css`
  background-color: #fc9106;
`;
const rakuten = css`
  background-color: #62c8cf;
`;
const yahoo = css`
  background-color: #f56f74;
`;
export default AffilierItem;
