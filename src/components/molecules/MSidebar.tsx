import React, { useContext } from "react";
import {
  Menu,
  ProSidebar,
  SidebarContent,
  SidebarHeader,
} from "react-pro-sidebar";
import { isMobile, isDesktop } from "react-device-detect";
import { BsList } from "react-icons/bs";
import { MdLaunch } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

import AMenu from "../atoms/AMenu";
import GlobalContext from "../../store/global/context";
import { ActionType } from "../../store/global/action";
import "react-pro-sidebar/dist/css/styles.css";
import "../../styles/sidebar.css";

const listPath = [
  {
    title: "Home",
    path: "home",
    icon: AiOutlineHome,
    hideOnDesktop: false,
  },
  {
    title: "Launchpad",
    path: "launchpad",
    icon: MdLaunch,
    hideOnDesktop: false,
  },
];

const MSidebar = () => {
  const { GlobalState, GlobalDispatch } = useContext(GlobalContext);
  const { openSidebar } = GlobalState;

  const handleCollapseSidebar = () => {
    GlobalDispatch({
      type: ActionType.SetOpenSidebar,
      payload: !openSidebar,
    });
  };

  const handleLogout = () => {
    console.log("logout will be trigger here");
  };

  return (
    <aside
      className={
        "z-0 h-full " +
        (isDesktop ? "block" : openSidebar && isMobile ? "block" : "hidden")
      }
    >
      <ProSidebar
        collapsed={isMobile ? false : openSidebar}
        width={isMobile ? 700 : 250}
      >
        <SidebarHeader className="sm:flex hidden gap-3 px-7 pt-[72px] pb-2">
          <Menu iconShape="square">
            <div className="flex gap-3 items-center w-full">
              <BsList
                onClick={handleCollapseSidebar}
                className="cursor-pointer"
                size={25}
              />
              {!openSidebar && <p className="cursor-default">Menu</p>}
            </div>
          </Menu>
        </SidebarHeader>
        <SidebarContent className="block sm:pt-0 pt-20">
          {listPath.map((item, idx) => (
            <AMenu
              key={idx}
              item={item}
              handleLogout={handleLogout}
              handleCollapseSidebar={handleCollapseSidebar}
            />
          ))}
        </SidebarContent>
      </ProSidebar>
    </aside>
  );
};

export default MSidebar;
