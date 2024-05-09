import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { NoLayoutInner, NoLayoutWrap } from "../styles/NoLayoutStyle";
import Header from "../components/Header";
import { removeCookie } from "../api/cookie";
import { useResetRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { UserStateAtom } from "../recoil/atoms/UserState";

const NoLayout = () => {
  const { pathname } = useLocation();
  const resetAuthState = useResetRecoilState(AuthStateAtom);
  const resetUserState = useResetRecoilState(UserStateAtom);

  useEffect(() => {
    if (pathname === "/" || pathname === "/terms" || pathname === "/signup") {
      removeCookie("token");
    }
    resetAuthState();
    resetUserState();
  }, [pathname]);
  
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
