import {FC, memo,} from "react"
import { answerpageType } from "../../../types/answerpageType";


const AnswerPageLayout:FC<answerpageType> = memo((props) => {

  const {tentname, image, features, goodPoint, importantPoint} = props;

  return (
    <>
      <div>{tentname}</div>
      <img src={image} alt="テントの画像" />
      <div>{features}</div>
      <div>{goodPoint}</div>
      <div>{importantPoint}</div>
    </>
  );
});

export default AnswerPageLayout;
