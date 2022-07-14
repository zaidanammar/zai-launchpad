import { ActionType, GlobalAction } from "./action";
import { IGlobalState } from "./state";

export const GlobalReducer = (state: IGlobalState, action: GlobalAction) => {
  switch (action.type) {
    case ActionType.SetOpenSidebar:
      return { ...state, openSidebar: action.payload };
    case ActionType.SetOpenSelectWallet:
      return { ...state, openSelectWallet: action.payload };
    case ActionType.Setprovider:
      return { ...state, provider: action.payload };
  }
};
