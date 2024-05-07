import React from "react";
import { Outlet } from "react-router";
import { NoLayoutInner, NoLayoutWrap } from "../styles/NoLayoutStyle";
import Header from "../components/Header";

const NoLayout = () => {
  return (
    <NoLayoutWrap>
      <Header />
      <NoLayoutInner>
        <Outlet />
      </NoLayoutInner>
    </NoLayoutWrap>
  );
};

export default NoLayout;
