import { memo, FC, useState } from "react";

import Footer from "../footer/Footer";
import TestPage from "../testpage/TestPage";

const Home: FC = memo(() => {
  // ホームページ用
  const [homePage, setHomePage] = useState(true);
  // 診断ページ用
  const [testPage, settestPage] = useState(false);

  const onClickStart = () => {
    setHomePage(false);
    settestPage(true);
  };

  return (
    <>
      {homePage && (
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
          <Footer />
        </main>
      )}
      {testPage && <TestPage />}
    </>
  );
});

export default Home;
