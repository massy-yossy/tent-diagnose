import {FC, memo, ReactNode} from "react"


type Props = {
  title: string | ReactNode,
  name: string
}

const AnswerPageLayout:FC<Props> = memo((props) => {
  const { title, name } = props;

  return (
    <>
      <div>{title}</div>
      <div>{name}</div>
    </>
  );
});

export default AnswerPageLayout;
