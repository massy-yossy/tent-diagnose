import { ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";

export type tentpageType = {
  title?: ReactNode;
  subtitle?: ReactNode;
  question1: ReactNode;
  question2: ReactNode;
  question3: ReactNode;
  buttonSize: SerializedStyles;
}
