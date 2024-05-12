import React from "react";
import { LayoutInner, LayoutWrap } from "../styles/LayoutStyle";
import { Outlet, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  return (
    <LayoutWrap>
      {location.pathname === "/home" ? (
        ""
      ) : (
        <div className="space">
          <Header />
        </div>
      )}
      <LayoutInner>
        <main>
          <Outlet />
        </main>
        <div className="space" />
      </LayoutInner>
      <Footer />
    </LayoutWrap>
  );
};

export default Layout;
