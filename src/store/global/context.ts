import { createContext } from "react";
import { IGlobalContext, IGlobalState } from "./state";
import { isMobile } from "react-device-detect";

export const initialGlobalState: IGlobalState = {
  openSidebar: isMobile ? false : true,
  openSelectWallet: false,
  provider: "",
};

const GlobalContext = createContext<IGlobalContext>({
  GlobalState: initialGlobalState,
  GlobalDispatch: () => undefined,
});

export const GlobalContextProvider = GlobalContext.Provider;

export default GlobalContext;
