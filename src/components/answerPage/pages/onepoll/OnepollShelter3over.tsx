import {FC, memo} from "react"

import AnswerPageLayout from "../../layout/AnswerPageLayout";
import { css } from "@emotion/react";
import { onepollShelter3overData } from "../../affilierData/onepoll/onepollShelter3overData";


const OnepollShelter3over: FC = memo(() => {
  return (
    <AnswerPageLayout
      tentName="ワンポールテント"
      image="./images/tent-illustration/onepoll.webp"
      tentComment={
        <>
          夏のグループキャンプは、<br />
          ワンポールテントのシェルタータイプがおすすめです。
        </>
      }
      features={
        <>
          <img src="./images/article/onepoll1.webp" alt="テント写真" />
          ワンポールテントとは、真ん中の1本のポールで支える円錐型テントのことです。
          <br /><br />
          とんがり屋根の可愛らしい見た目が特徴で、モノポールテントやティピーテントとも呼ばれています。
          <br />
          <br />
          <h2 css={sectionTitle}>シェルターテントとは</h2>
          <p css={sectionText}>
            シェルターテントとは、フロアシート（床面）がないテントのことです。
          </p>
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
          キャンプ初心者にとって、テントの設営は難関といっても過言ではありません。
          <br />
          面倒な設営がラクになるのはワンポールテントの大きなメリットといえます。
          <br />
          <br />
          また、ワンポールテントの形状にもよりますが、天敵と呼べる「風」に強いのも大きな特徴です。
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
          ワンポールテントは比較的値段の安いタイプですが、あまりにも安すぎるテントは避けることをおすすめします。
          <ul>
            <li>耐久性がない</li>
            <li>壊れやすい</li>
            <li>破けやすい</li>
          </ul>
          など、安いテントには安いなりの理由があります。
          <br />
          とりあえず試しに1回行ってみたいという方にはおすすめですが、キャンプを趣味にしたいと考えている方にはおすすめできません。
          <br />
          <br />
          本気で趣味にしたいと思っている方は、最低でも1万円以上のテントを購入するようにしましょう。
          <br />
          <br />
          また、夏場はシェルターテントで通気性をアップさせることも重要ですが、雨による浸水や虫対策は万全にしておきましょう。
          <br />
          <br />
          簡単な対策は、メッシュのインナーテントを使用する、コットなどを使って底上げをするなどが挙げられます。
        </>
      }
      affilierData={onepollShelter3overData}
    />
  )
})

const media600 = `
@media screen and (max-width: 600px)
`;

const sectionTitle = css`
  font-size: 20px;
  font-weight: bold;
  background-color: #305a30;
  width: fit-content;
  color: #fff;
  padding: 12px 18px;
  text-align: center;
  min-width: 237px;
  box-sizing: border-box;
  ${media600} {
    font-size: 22px;
    text-align: start;
    width: 100%;
    padding: 12px 14px;
  }
`;
const sectionText = css`
  padding: 34px 0 0 0;
  font-size: 16px;
  line-height: 180%;
  ${media600} {
    padding: 33px 0 0 0;
    font-size: 15px;
  }
`;
export default OnepollShelter3over
