import React, { useReducer } from "react";
import OLayout from "./components/organisms/OLayout";
import {
  GlobalContextProvider,
  initialGlobalState,
} from "./store/global/context";
import { GlobalReducer } from "./store/global/reducer";
import Routes from "./routes";

const App = () => {
  const [GlobalState, GlobalDispatch] = useReducer(
    GlobalReducer,
    initialGlobalState
  );

  return (
    <GlobalContextProvider value={{ GlobalDispatch, GlobalState }}>
      <OLayout>
        <Routes />
      </OLayout>
    </GlobalContextProvider>
  );
};

export default App;
