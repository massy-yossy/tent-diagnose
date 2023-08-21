import { FC, memo } from "react";

import AnswerPageLayout from "../../layout/AnswerPageLayout";
import { domeDurableData } from "../../affilierData/dome/domeDurableData";
import StyleTextRed from "../../styles/StyleTextRed";

const DomeDurable: FC = memo(() => {
  return (
    <AnswerPageLayout
      tentName="ドームテント"
      image="./images/tent-illustration/dome.webp"
      tentComment={
        <>
          ソロキャンプで耐久性のあるテントを求めるなら、
          <br />
          ドームテントがおすすめです。
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
          長く使える耐久性には「耐水圧」が重要です。
          <br />
          <br />
          テントの耐水圧は1,000mm以下のものから10,000mmを超えるものまで幅広く存在しますが、
          <StyleTextRed>
            耐水圧が高ければいいというわけではありません。
          </StyleTextRed>
          <br />
          <br />
          もちろん、耐水圧が強いテントは、雨が降っても浸水の心配がなく、生地も分厚くなるので冬のキャンプでも安心です。
          <br />
          <br />
          しかし、その分、通気性が悪く結露の原因にもなるので注意が必要です。耐久性、通気性に優れた丁度良い耐水圧は1,500〜2,000mmを目安にしてください。
        </>
      }
      affilierData={domeDurableData}
    />
  );
});

export default DomeDurable;
