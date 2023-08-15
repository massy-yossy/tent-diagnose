import { FC, memo } from "react";
import { css } from "@emotion/react";

type Props = {
  className? : string;
}

const Logo: FC<Props> = memo((props) => {
  const { className } = props;
  return (
    <div css={logo} className={className}>
      <a href="https://mypace-outdoor.com/" target="_blank" rel="noopener">
        <img src="./images/logo.webp" alt="ロゴ" />
      </a>
    </div>
  );
});

const media600 = `
@media screen and (max-width: 600px)
`;

const logo = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 197px;
  height: auto;
  img {
    width: 100%;
    object-fit: cover;
  }
  ${media600} {
    width: 123px;
  }
`;

export default Logo;
