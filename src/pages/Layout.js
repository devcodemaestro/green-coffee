import React, { useEffect } from "react";
import { LayoutInner, LayoutWrap } from "../styles/LayoutStyle";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Interceptor } from "../components/Interceptor";

const Layout = () => {
  const location = useLocation();

  return (
    <LayoutWrap>
      <Interceptor>
        {location.pathname === "/home" ? "" : <Header />}
        <LayoutInner>
          <main>
            <Outlet />
          </main>
          <div className="space" />
        </LayoutInner>
        <Footer />
      </Interceptor>
    </LayoutWrap>
  );
};

export default Layout;
