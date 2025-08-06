import { UnknownOutputParams } from "expo-router";

export interface Call extends UnknownOutputParams {
  quem: string;
  porQue: string;
  algoMais: string;
}
