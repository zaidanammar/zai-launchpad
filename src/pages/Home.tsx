import React, { useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { truncateAddress } from "../utils/common";
import { Connectors } from "../config/Connector";
import OSelectWalletDialog from "../components/organisms/OSelectWalletDialog";
import GlobalContext from "../store/global/context";

const Home = () => {
  const { GlobalState } = useContext(GlobalContext);
  const { provider, openSelectWallet } = GlobalState;

  const { active, account, activate, deactivate, chainId } = useWeb3React();

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(Connectors[provider]);
          localStorage.setItem("isWalletConnected", "true");
        } catch (e) {
          console.log(e);
        }
      }
    };
    connectWalletOnPageLoad();
  }, [provider]);

  return <>{openSelectWallet && <OSelectWalletDialog />}</>;
};

export default Home;
