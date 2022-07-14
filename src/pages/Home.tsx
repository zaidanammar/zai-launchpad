/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Connectors } from "../config/Connector";
import OSelectWalletDialog from "../components/organisms/home/OSelectWalletDialog";
import GlobalContext from "../store/global/context";
import AButton from "../components/atoms/AButton";

const Home = () => {
  const navigate = useNavigate();
  const { GlobalState } = useContext(GlobalContext);
  const { provider, openSelectWallet } = GlobalState;

  const { activate } = useWeb3React();

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

  return (
    <>
      {openSelectWallet && <OSelectWalletDialog />}
      <main className="sm:pt-28 pt-16 sm:mb-0 mb-10">
        <section className="flex flex-col justify-center items-center">
          <h1 className="sm:text-3xl text-xl font-semibold">
            The Launchpad Protocol for Everyone!
          </h1>
          <p className="mt-3 max-w-2xl text-center">
            PinkSale helps everyone to create their own tokens and token sales
            in few seconds. Tokens created on PinkSale will be verified and
            published on explorer websites.
          </p>
        </section>

        <section className="flex justify-center gap-5 items-center my-10">
          <div className="w-fit">
            <AButton
              title="Create Now"
              onClick={() => navigate("/launchpad")}
            />
          </div>
          <div className="w-fit">
            <AButton
              title="learn More"
              onClick={() => navigate("/launchpad")}
            />
          </div>
        </section>

        <section className="max-w-5xl mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-5 gap-3 my-10 pb-20">
          <div className="flex flex-col items-center py-8 px-6 rounded-md drop-shadow-sm bg-white">
            <h1 className="font-semibold text-3xl">$3.3M</h1>
            <p className="mt-2">Total Liquidity Raised</p>
          </div>
          <div className="flex flex-col items-center py-8 px-6 rounded-md drop-shadow-sm bg-white">
            <h1 className="font-semibold text-3xl">$138</h1>
            <p className="mt-2">Total Projects</p>
          </div>
          <div className="flex flex-col items-center py-8 px-6 rounded-md drop-shadow-sm bg-white">
            <h1 className="font-semibold text-3xl">5.1K</h1>
            <p className="mt-2">Total Participants</p>
          </div>
          <div className="flex flex-col items-center py-8 px-6 rounded-md drop-shadow-sm bg-white">
            <h1 className="font-semibold text-3xl">$3.7M</h1>
            <p className="mt-2">Total Values Locked</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
