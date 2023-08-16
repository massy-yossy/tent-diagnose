import { FC, memo } from "react";
import { affilierDataType } from "../../../types/affilierDataType";
import AffilierButton from "../atoms/affilierButton";
import { css } from "@emotion/react";

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
          <AffilierButton css={amazon} affilierLink={data.amazon}>Amazon</AffilierButton>
          <AffilierButton css={rakuten} affilierLink={data.rakuten}>楽天</AffilierButton>
          <AffilierButton css={yahoo} affilierLink={data.yahoo}>Yahoo!</AffilierButton>
        </div>
      </div>
    </div>
  );
});

const affContainer = css`
  background-color: #f6f3e4;
  border: 2px solid #707070;
  width: 476px;
  padding: 33px 36px 33px 37px;
  display: flex;
  gap: 30px;
  box-sizing: border-box;
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium", "游ゴシック", "Yu Gothic", sans-serif;;
`;
const img = css`
  flex-shrink: 0;
  width: 195px;
  height: 195px;
  img {
    width: 100%;
    object-fit: cover;
  }
`;
const textContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const bland = css`
width: fit-content;
  font-size: 12px;
  font-weight: bold;
  padding: 1px 7px 0px;
  margin-bottom: 6px;
  background-color: #B88F1F;
  line-height: 1;
  color: #fff;
`;
const tentName = css`
  font-size: 14px;
  line-height: calc(26 / 16);
  font-weight: bold;
`
const buttonContainer = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const amazon = css`
  background-color: #FC9106;
`
const rakuten = css`
  background-color: #62C8CF;
`
const yahoo = css`
  background-color: #F56F74;
`
export default AffilierItem;
