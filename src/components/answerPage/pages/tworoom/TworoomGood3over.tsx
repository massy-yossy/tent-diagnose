import { FC, memo } from "react";

import AnswerPageLayout from "../../layout/AnswerPageLayout";
import { TworoomGood3overData } from "../../affilierData/tworoom/TworoomGood3overData";
import StyleTextRed from "../../styles/StyleTextRed";

const TworoomGood3over: FC = memo(() => {
  return (
    <AnswerPageLayout
      tentName="ツールームテント"
      image="./images/tent-illustration/tworoom.webp"
      tentComment={
        <>
          グループキャンプは広々使える
          <br />
          ツールームテントがおすすめです。
        </>
      }
      features={
        <>
          <img src="./images/article/tworoom1.webp" alt="ツールームテント" />
          ツールームテントとは、寝室とリビングの2つの居住スペースを備えたテントのことです。
          <br />
          <br />
          キャンプ場で見かけることの多い人気タイプで、グループキャンプからファミリーキャンプまで幅広く使用できます。
        </>
      }
      goodPoint={
        <>
          <img src="./images/article/tworoom2.webp" alt="ツールームテント" />
          ツールームテントの良いところは、以下の3つです。
          <ul>
            <li>タープが必要ない</li>
            <li>寝室とリビングが別なので使いやすい</li>
            <li>雨風の影響を受けにくい</li>
          </ul>
          ツールームテントは、
          <StyleTextRed>
            リビングスペース（前室）があるので、タープを持っていく必要がありません。
          </StyleTextRed>
          これだけで、荷物をひとつ減らせるので、大きなメリットといえます。
          <br />
          <br />
          また、寝室とリビングが別なので、荷物の置き場やプライベートスペースの使い分けがしやすく、快適に過ごすことも可能です。
          <br />
          <br />
          フルクローズにすれば、雨風の影響を受けずに”おこもりキャンプ”を楽しめるのも、ツールームテントの魅力のひとつです。
        </>
      }
      importantPoint={
        <>
          <img src="./images/article/tworoom3.webp" alt="ツールームテント" />
          ツールームテントはメリットの多いテントタイプですが、デメリットもあります。
          <br />
          <br />
          ツールームテント最大のデメリットは、サイズが大きく重たいこと。
          <br />
          <br />
          そのため、
          <StyleTextRed>
            1人で設営するのは難しく、2～3人以上で設営するのがベスト
          </StyleTextRed>
          です。
          <br />
          <br />
          また、サイズが大きいので、小さめの区画サイトでは入りきらない可能性があります。フリーサイトなら問題ありませんが、区画サイトを利用する場合は事前にテントのサイズと区画の大きさを確認しておきましょう。
        </>
      }
      affilierData={TworoomGood3overData}
    />
  );
});

export default TworoomGood3over;
