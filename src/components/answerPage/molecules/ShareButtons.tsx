import {FC, memo} from 'react'

const ShareButtons: FC = memo(() => {

  const url = location.href;

  return (
    <div>
      <p>シェアする</p>
      <div>
        <a href={`http://twitter.com/share?url=${url}&text=あなたにおすすめのテントタイプ診断結果です！`} target="_blank" rel="noopener noreferrer">ツイート</a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </div>
  )
})

export default ShareButtons
