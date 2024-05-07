import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { NoLayoutInner, NoLayoutWrap } from "../styles/NoLayoutStyle";
import Header from "../components/Header";
import { removeCookie } from "../api/cookie";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";

const NoLayout = () => {
  const { pathname } = useLocation();
  const resetAuthState = useResetRecoilState(AuthStateAtom);
  const data = useRecoilValue(AuthStateAtom);

  useEffect(() => {
    if (pathname === "/" || pathname === "/terms" || pathname === "/signup") {
      removeCookie("token");
    }
    resetAuthState();
    // console.log(data);
  }, [pathname]);
  // console.log(data);
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
