import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Launchpad from "../pages/Launchpad";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="home" element={<Home />} />
        <Route path="launchpad" element={<Launchpad />} />

        <Route path="/" element={<Navigate replace to="home" />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
