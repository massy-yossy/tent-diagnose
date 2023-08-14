import { createContext, FC, Dispatch, SetStateAction, ReactNode, useState} from "react";


export type AnswerContextType = {
  answer: string[];
  setAnswer: Dispatch<SetStateAction<string[]>>
}

export const AnswerContext = createContext<AnswerContextType>({} as AnswerContextType);

type Props = {
  children: ReactNode;
}

export const AnswerProvider: FC<Props> = (props) => {

  const { children } = props;

  //答えを収納するステート
  const [answer, setAnswer] = useState<string[]>([]);

  return (
    <AnswerContext.Provider value={{ answer, setAnswer }}>
      {children}
    </AnswerContext.Provider>
  )
}
