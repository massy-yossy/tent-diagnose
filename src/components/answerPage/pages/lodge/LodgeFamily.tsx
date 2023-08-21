import { FC, memo } from "react";

import AnswerPageLayout from "../../layout/AnswerPageLayout";
import { lodgeFamilyData } from "../../affilierData/lodge/lodgeFamilyData";
import StyleTextRed from "../../styles/StyleTextRed";

const LodgeFamily: FC = memo(() => {
  return (
    <AnswerPageLayout
      tentName="ロッジテント"
      image="./images/tent-illustration/lodge.webp"
      tentComment={
        <>ファミリーキャンプでデザイン性を求めるなら、ロッジテントがおすすめ</>
      }
      features={
        <>
          <img src="./images/article/lodge1.webp" alt="ロッジテント" />
          ロッジテントとは、絵本に出てくるような「家」のようなフォルムをしたテントです。
          <br />
          <br />
          最近では見かける機会が少なくなりましたが、70年代まではロッジテントが主流だっため、少しレトロなヴィンテージ感があるのが特徴です。
        </>
      }
      goodPoint={
        <>
          <img src="./images/article/lodge2.webp" alt="ロッジテント" />
          ロッジテントの良いところは、以下の3つです。
          <ul>
            <li>設営が意外と簡単</li>
            <li>天井が高く、生活しやすい</li>
            <li>見た目がかわいい</li>
          </ul>
          ロッジテントは設営が困難に思えますが、構造自体はシンプルなのでコツを掴めばそこまで難しくありません。
          <br />
          <br />
          頑丈な鉄骨で骨組みを造り、そこに幕をかぶせて立ち上げるだけなので、1人では難しいですが2～3人であれば簡単に問題なく設営できるでしょう。
          <br />
          <br />
          また、
          <StyleTextRed>
            ロッジテントの室内は、ワンポールテントの天井の高さとドームテントの広さを良いとこ取りしたようなイメージ
          </StyleTextRed>
          で、生活しやすい環境です。
        </>
      }
      importantPoint={
        <>
          <img src="./images/article/lodge3.webp" alt="ロッジテント" />
          ロッジテントのデメリットは、他のテントに比べて価格が高いことです。
          <br />
          <br />
          ファミリーキャンプ用の大型テントなので仕方ありませんが、安いテントが欲しいと考えている方にはネックになるでしょう。
          <br />
          <br />
          また、大型テントなので、重量が重く嵩張（かさば）ることがあるので、注意が必要です。
        </>
      }
      affilierData={lodgeFamilyData}
    />
  );
});

export default LodgeFamily;
