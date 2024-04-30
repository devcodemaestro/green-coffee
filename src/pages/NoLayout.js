import React from "react";
import { Outlet } from "react-router";
import { NoLayoutInner, NoLayoutWrap } from "../styles/NoLayoutStyle";

const NoLayout = () => {
  return (
    <NoLayoutWrap>
      <NoLayoutInner>
        <Outlet />
      </NoLayoutInner>
    </NoLayoutWrap>
  );
};

export default NoLayout;
