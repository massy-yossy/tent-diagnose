import { FC, memo } from "react";
import AnswerPageLayout from "../../layout/AnswerPageLayout";
import { domeStylishData } from "../../affilierData/dome/domeStylishData";
import StyleTextRed from "../../styles/StyleTextRed";

const DomeStylish: FC = memo(() => {
  return (
    <AnswerPageLayout
      tentName="ドームテント"
      image="./images/tent-illustration/dome.webp"
      tentComment={
        <>
          機能性よりもデザイン性を求めるなら、
          <br />
          おしゃれなドームテントがおすすめです。
        </>
      }
      features={
        <>
          <img src="./images/article/dome1.webp" alt="テント写真" />
          天井が丸みを帯びたドーム型テントのこと。
          <br />
          <br />
          ポールのしなりによって生地を持ち上げているため、余裕のある空間作りと強度が魅力です。中にはペグを打たなくても自立するタイプもあります。
        </>
      }
      goodPoint={
        <>
          <img src="./images/article/dome2.webp" alt="テント写真" />
          ドームテントのメリットは、以下の3つです。
          <br />
          <ul>
            <li>強度が強く、雨風に強い</li>
            <li>テント内を広々使える</li>
            <li>設営が簡単</li>
          </ul>
          丸い形状のドームテントは、
          <StyleTextRed>
            雨が降っても地面に流れ落ち、風の影響も受けにくい
          </StyleTextRed>
          ことから、登山などでも使用されています。
          <br />
          <br />
          また、ワンポールテントはデットスペース（狭く使いづらいスペース）が多くレイアウトに困ることもありますが、広々スペースのドームテントはその心配がありません。天井高く、優雅に寛げるのは、ドームテントの大きなメリットといえます。
          <br />
          <br />
          ワンポールテント同様、ドームテントも設営がとても簡単なので、初心者でも安心です。
        </>
      }
      importantPoint={
        <>
          <img src="./images/article/dome3.webp" alt="テント写真" />
          テントがおしゃれだと、テンションが上がりますよね。
          <br /><br />
          キャンプを楽しむためにも、デザイン性に優れたおしゃれなテントを選ぶことはとても良いことですが、最低限の機能性は確保しておきましょう。
          <br />
          <br />
          チェックするポイントは、以下の3つです。
          <ul>
            <li>設営のしやすさ</li>
            <li>耐水圧（1,500～2,000mm程度が目安）</li>
            <li>インナーテント付き（メッシュ）</li>
          </ul>
          キャンプに必要な機能性が備わってないと快適に過ごせなくなってしまうので、購入する際は必ずチェックすることをおすすめします。
        </>
      }
      affilierData={domeStylishData}
    />
  );
});

export default DomeStylish;
