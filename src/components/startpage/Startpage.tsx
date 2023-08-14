import { FC, memo, Dispatch, SetStateAction } from "react";
import { css } from "@emotion/react";

import Footer from "../footer/Footer";

type Props = {
  homePage: boolean;
  setHomePage: Dispatch<SetStateAction<boolean>>;
  testPage: boolean;
  settestPage: Dispatch<SetStateAction<boolean>>;
};

const footer = css`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Startpage: FC<Props> = memo((props) => {
  const { homePage, setHomePage, testPage, settestPage } = props;

  const onClickStart = () => {
    setHomePage(!homePage);
    settestPage(!testPage);
  };

  return (
    <>
      <main>
        <div>
          <h1>
            おすすめの<br></br>テントタイプ診断
          </h1>
          <p>TENT TYPE TEST.</p>
          <p>キャンプはテント選びがとても重要です</p>
          <p>事前に自分に合ったテントを診断しましょう。</p>
          <div>
            <p>
              30秒で<br></br>診断！
            </p>
            <button onClick={onClickStart}>診断スタート</button>
          </div>
        </div>
      </main>
      <Footer css={footer} />
    </>
  );
});

export default Startpage;
