import React from "react";
import { GlobalAction } from "./action";

export interface IGlobalState {
  openSidebar: boolean;
  openSelectWallet: boolean;
  provider: string;
}

export interface IGlobalContext {
  GlobalState: IGlobalState;
  GlobalDispatch: React.Dispatch<GlobalAction>;
}
