import React, { useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import { Connectors } from "../../config/Connector";
import ADialogBox from "../atoms/ADialogBox";
import GlobalContext from "../../store/global/context";
import { ActionType } from "../../store/global/action";

const OSelectWalletDialog = () => {
  const { GlobalDispatch, GlobalState } = useContext(GlobalContext);
  const { openSelectWallet } = GlobalState;
  const { activate } = useWeb3React();

  const connect = async (provider: any) => {
    try {
      await activate(Connectors[provider]);
      localStorage.setItem("isWalletConnected", "true");
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleSelectWallet = (provider: string) => {
    connect(Connectors[provider]);
    GlobalDispatch({
      type: ActionType.Setprovider,
      payload: provider,
    });
    GlobalDispatch({
      type: ActionType.SetOpenSelectWallet,
      payload: false,
    });
  };

  const handleCLose = () => {
    GlobalDispatch({
      type: ActionType.SetOpenSelectWallet,
      payload: false,
    });
  };

  return (
    <ADialogBox
      content={{
        title: "Select Wallet",
        body: (
          <div className="flex flex-col">
            <button
              onClick={() => handleSelectWallet("coinbaseWallet")}
              className="w-full my-1.5 px-5 py-2.5 flex gap-3 items-center justify-center border rounded-md shadow hover:border-textPrimary"
            >
              <img src="/assets/cbw.png" alt="cbw" className="w-6" />
              <p>Coinbase Wallet</p>
            </button>
            <button
              className="w-full my-1.5 px-5 py-2.5 flex gap-3 items-center justify-center border rounded-md shadow hover:border-textPrimary"
              onClick={() => handleSelectWallet("walletConnect")}
            >
              <img src="/assets/wc.png" alt="wc" className="w-6" />
              <p>Wallet Connect</p>
            </button>
            <button
              className="w-full my-1.5 px-5 py-2.5 flex gap-3 items-center justify-center border rounded-md shadow hover:border-textPrimary"
              onClick={() => handleSelectWallet("injected")}
            >
              <img src="/assets/mm.png" alt="mm" className="w-6" />
              <p>Metamask</p>
            </button>
          </div>
        ),
      }}
      isOpen={openSelectWallet}
      handleClose={handleCLose}
    />
  );
};

export default OSelectWalletDialog;
