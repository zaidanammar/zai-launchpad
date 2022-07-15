/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeb3React } from "@web3-react/core";
import { Connectors } from "../config/Connector";
import OSelectWalletDialog from "../components/organisms/home/OSelectWalletDialog";
import GlobalContext from "../store/global/context";
import AButton from "../components/atoms/AButton";
import ABox from "../components/atoms/ABox";

const analytics = [
  {
    title: "$3.3M",
    subtitle: "Total Liquidity Raised",
  },
  {
    title: "138",
    subtitle: "Total Projects",
  },
  {
    title: "5.1K",
    subtitle: "Total Participants",
  },
  {
    title: "$3.7M",
    subtitle: "Total Values Locked",
  },
];

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
          <h1 className="sm:text-3xl text-xl font-semibold text-center">
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
          {analytics.map((el, idx) => (
            <ABox key={idx} title={el.title} subtitle={el.subtitle} />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
