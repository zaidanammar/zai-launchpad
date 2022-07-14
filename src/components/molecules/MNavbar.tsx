import React, { useContext, useState } from "react";
import { BiNetworkChart } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import AButton from "../atoms/AButton";

import GlobalContext from "../../store/global/context";
import { ActionType } from "../../store/global/action";
import { useWeb3React } from "@web3-react/core";
import { truncateAddress } from "../../utils/common";
import { Menu, MenuItem } from "@mui/material";

const MNavbar = () => {
  const { GlobalDispatch } = useContext(GlobalContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const { active, account, deactivate, chainId } = useWeb3React();

  const handleOpenSelectWallet = (isOpen: boolean) => {
    GlobalDispatch({
      type: ActionType.SetOpenSelectWallet,
      payload: isOpen,
    });
  };

  const disconnect = async () => {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <nav className="fixed h-16 z-10 flex md:px-8 px-6 w-full bg-white shadow-md">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 justify-start">
          <div>
            <h1 className="text-lg font-semibold text-textPrimary">
              Zai Launchpad
            </h1>
          </div>
        </div>

        {active ? (
          <div className="flex w-fit px-5 py-2 bg-primary rounded-md shadow-sm">
            <div className="flex justify-center items-center w-full">
              <p
                onClick={handleClick}
                className="cursor-pointer text-sm font-semibold text-textPrimary"
              >
                {active && account ? truncateAddress(account) : "Connect"}
              </p>
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.8,
                  ml: 2.2,
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    left: 12,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem className="flex gap-2">
                <BiNetworkChart size={12} />{" "}
                <p className="text-sm">Network: {chainId}</p>
              </MenuItem>
              <MenuItem onClick={disconnect} className="flex gap-2">
                <FiLogOut size={12} /> <p className="text-sm">Disconnect</p>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <div className="sm:flex hidden items-center sm:w-fit py-2">
            <AButton
              title="Connect"
              onClick={() => handleOpenSelectWallet(true)}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default MNavbar;
