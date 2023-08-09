import DomeDurable from "../components/answer/tentDataPage/dome/DomeDurable";
import OnepollCheap from "../components/answer/tentDataPage/onepoll/OnepollCheap";
import { TentDataKey } from "../types/TentDataKey";


export const AnswerTentData: Record<TentDataKey, React.FC> = {
  aaa: OnepollCheap,
  aab: DomeDurable,
}
