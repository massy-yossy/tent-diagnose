import { FC, memo } from "react";

import AnswerPageLayout from "../../layout/AnswerPageLayout";
import { tunnelFamilyData } from "../../affilierData/tunnel/tunnelFamilyData";

const TunnelFamily: FC = memo(() => {
  return (
    <AnswerPageLayout
      tentName="トンネルテント"
      image="./images/tent-illustration/tunnel.webp"
      tentComment={
        <>
          ファミリーキャンプには大型で使いやすい
          <br />
          トンネルテントがおすすめです。
        </>
      }
      features={
        <>
          <img src="./images/article/tunnel1.webp" alt="トンネルテント" />
          トンネルテントとは、寝室とリビングの2つの居住スペースを備えた「ツールームテント」の一種です。
          <br />
          <br />
          広々とした空間が特徴のテントなので、ファミリーキャンプなどの大人数キャンプに適しています。
        </>
      }
      goodPoint={
        <>
          <img src="./images/article/tunnel2.webp" alt="トンネルテント" />
          トンネルテントの良いところは、以下の3つです。
          <ul>
            <li>設営が意外と簡単</li>
            <li>アーチ型構造なので、風の抵抗を抑える</li>
            <li>広々空間で使いやすい</li>
          </ul>
          トンネルテントは、大型テントなので設営が困難に思えますが、構造がシンプルなので意外と簡単に設営できてしまいます。とはいえ、1人で設営するのは大変なので、2～3人で協力して設営しましょう。
          <br />
          <br />
          また、トンネル部分のアーチ形は風の抵抗を抑える効果があり、急な突風や風の強い海沿いキャンプでも安心です。
          <br />
          <br />
          せっかくのファミリーキャンプで窮屈な思いはしたくないですよね。トンネルテントなら、テント内も広々使えるので、快適に過ごせるでしょう。
        </>
      }
      importantPoint={
        <>
          <img src="./images/article/tunnel3.webp" alt="トンネルテント" />
          トンネルテントのデメリットとして、サイズが大きいので持ち運びに不便な点が挙げられます。大型のトンネルテントの場合は、重さが20kgを超えることもあるため、車の積載量などは事前に確認しておきましょう。
          <br />
          <br />
          また、フルクローズにすると「熱がこもりやすい」というデメリットもあります。
          <br />
          <br />
          とくに夏場は熱気がこもってしまう可能性があるので、サイドパネルをフルオープンにできるタイプを選ぶのがおすすめです。
        </>
      }
      affilierData={tunnelFamilyData}
    />
  );
});

export default TunnelFamily;
