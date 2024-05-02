import React, { useEffect, useState } from "react";
import { LayoutInner, LayoutWrap } from "../styles/LayoutStyle";
import { Outlet, useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Interceptor } from "../components/Interceptor";

const Layout = () => {
  // const [token, setToken] = useState(false);
  const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/"); 
  //   }
  // }, [token, navigate]);

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
