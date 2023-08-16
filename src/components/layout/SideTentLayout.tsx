import { css } from "@emotion/react";
import { FC, memo, ReactNode } from "react";
import Logo from "../atoms/Logo";

type Props = {
  children: ReactNode;
};

const SideTentLayout: FC<Props> = memo(({ children }) => {
  return (
    <div css={container}>
      <div css={wrapper}>
        <div css={leftimg}>
          <img src="./images/tent2.webp" alt="テントイラスト" />
        </div>
        <div css={rightimg}>
          <img src="./images/tent1.webp" alt="テントイラスト" />
        </div>
        <Logo css={logo} />
        {children}
      </div>
    </div>
  );
});

const media990 = `
@media screen and (max-width: 990px)
`;
const media600 = `
@media screen and (max-width: 600px)
`;
const logo = css`
  top: 27px;
  left: 36px;
  ${media600} {
    top: 16px;
    left: 17px;
  }
`;
const container = css`
  background-color: rgba(255, 254, 243, 0.7);
`;

const wrapper = css`
  max-width: 1920px;
  margin-right: auto;
  margin-left: auto;
  position: relative;
`;

const leftimg = css`
  width: 34%;
  position: absolute;
  top: 31%;
  left: 3%;
  ${media990} {
    display: none;
  }
`;
const rightimg = css`
  width: 34%;
  position: absolute;
  top: 44%;
  right: 1.7%;
  ${media990} {
    display: none;
  }
`;
export default SideTentLayout;
