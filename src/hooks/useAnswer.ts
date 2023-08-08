import { useContext } from "react";

import { AnswerContext, AnswerContextType } from "../providers/AnswerProvider";

export const useAnswer = (): AnswerContextType => useContext(AnswerContext);

