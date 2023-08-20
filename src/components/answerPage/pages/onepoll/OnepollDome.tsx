import { FC, memo } from "react";
import AnswerPageLayout from "../../layout/AnswerPageLayout";
import { onepollDomeData } from "../../affilierData/onepoll/onepollDomeData";

const OnepollDome: FC = memo(() => {
  return (
    <AnswerPageLayout
      tentName="ワンポールテント"
      image="./images/tent-illustration/onepoll.webp"
      tentComment={
        <>
          冬のソロキャンプは、寒さ対策として
          <br />
          スカート付きのワンポールテントがおすすめです。
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
          <span>テントを広げてメインポールを立てるだけ</span>
          」なので、初心者の方でも簡単に設営できます。
          <br />
          <br />
          キャンプ初心者にとって、テントの設営は難関といっても過言ではありません。面倒な設営がラクになるのはワンポールテントの大きなメリットといえます。
          <br />
          <br />
          また、ワンポールテントの形状にもよりますが、天敵と呼べる「風」に強いのも大きな特徴です。
          <br />
          <br />
          より風に強いテントを選ぶ際は、面の数が多いワンポールテントを選びましょう。（四角形より六角形、さらに八角形）
          <br />
          <br />
          ワンポールテントは、インナーテントや煙突、スカート付きなど、きせつに応じてアレンジできる点も大きなメリットのひとつです。
        </>
      }
      importantPoint={
        <>
          <img src="./images/article/onepoll3.webp" alt="テント写真" />
          冬のキャンプで大切なのは「寒さ対策」。
          <br />
          <br />
          冬場はテント下から冷気が入り込んでくるので「スカート（袖）」付きのテントがおすすめです。
          <br />
          <br />
          スカート付きテントはどうしても値段が少し高くなってしまいますが、スカートなしの安いテントでは寒すぎてキャンプどころではなくなってしまいます。
          <br />
          <br />
          また、煙突が付いたワンポールテントなら、テント内で薪ストーブを楽しむことも可能です。
        </>
      }
      affilierData={onepollDomeData}
    />
  );
});

export default OnepollDome;
