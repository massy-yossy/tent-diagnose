import {memo, FC} from "react"

import Footer from "../footer/Footer";

type Props = {
  setHomePage: (b: boolean) => void;
  settestPage: (b: boolean) => void;
}


const Home:FC<Props> = memo((props) => {

  const { setHomePage, settestPage } = props;

  const onClickStart = () =>{
    setHomePage(false);
    settestPage(true)
  }

  return (
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
  );
});

export default Home;
