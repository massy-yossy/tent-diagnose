import { FC, memo } from "react";

import { onepollCheapData } from "../../affilierData/onepoll/onepollCheapData";
import AnswerPageLayout from "../../layout/AnswerPageLayout";
import StyleTextRed from "../../styles/StyleTextRed";

const OnepollCheap: FC = memo(() => {
  return (
    <>
      <AnswerPageLayout
        tentName="ワンポールテント"
        image="./images/tent-illustration/onepoll.webp"
        tentComment={
          <>
            キャンプ初心者でも手を出しやすい安いワンポールテントがおすすめです。
          </>
        }
        features={
          <>
            <img src="./images/article/onepoll1.webp" alt="テント写真" />
            ワンポールテントとは、真ん中の1本のポールで支える円錐型テントのことです。
            <br />
            <br />
            とんがり屋根の可愛らしい見た目が特徴で、モノポールテントやティピーテントとも呼ばれています。
          </>
        }
        goodPoint={
          <>
            <img src="./images/article/onepoll2.webp" alt="テント写真" />
            ワンポールテントのメリットは、以下の3つです。
            <ul>
              <li>設営が簡単</li>
              <li>風に強い</li>
              <li>幅広いアレンジが可能</li>
            </ul>
            ワンポールテントの設営は「
            <StyleTextRed>テントを広げてメインポールを立てるだけ</StyleTextRed>
            」なので、初心者の方でも簡単に設営できます。
            <br />
            <br />
            キャンプ初心者にとって、テントの設営は難関といっても過言ではありません。面倒な設営がラクになるのはワンポールテントの大きなメリットといえます。
            <br />
            <br />
            また、ワンポールテントの形状にもよりますが、天敵と呼べる「風」に強いのも大きな特徴です。より風に強いテントを選ぶ際は、面の数が多いワンポールテントを選びましょう。（四角形より六角形、さらに八角形）
            <br />
            <br />
            ワンポールテントは、インナーテントや煙突、スカート付きなど、きせつに応じてアレンジできる点も大きなメリットのひとつです。
          </>
        }
        importantPoint={
          <>
            <img src="./images/article/onepoll3.webp" alt="テント写真" />
            ワンポールテントは比較的値段の安いタイプですが、あまりにも安すぎるテントは避けることをおすすめします。
            <ul>
              <li>耐久性がない</li>
              <li>壊れやすい</li>
              <li>破けやすい</li>
            </ul>
            など、安いテントには安いなりの理由があります。
            <br />
            <br />
            とりあえず試しに1回行ってみたいという方にはおすすめですが、キャンプを趣味にしたいと考えている方にはおすすめできません。
            <br />
            <br />
            <StyleTextRed>
              本気で趣味にしたいと思っている方は、最低でも1万円以上のテントを購入
            </StyleTextRed>
            するようにしましょう。
          </>
        }
        affilierData={onepollCheapData}
      />
    </>
  );
});

export default OnepollCheap;
