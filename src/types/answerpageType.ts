import { ReactNode } from "react"
import { affilierDataType } from "./affilierDataType";

export type answerpageType = {
  tentName: ReactNode;
  tentComment: ReactNode
  image: string;
  features: ReactNode;
  goodPoint: ReactNode;
  importantPoint: ReactNode;
  affilierData: affilierDataType[];
}
