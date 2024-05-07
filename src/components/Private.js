import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { useRecoilValue } from "recoil";

export const PrivateRoutes = ({ element }) => {
  const navigate = useNavigate();
  const { loginstate, token } = useRecoilValue(AuthStateAtom);

  useEffect(() => {
    if (loginstate === "N" || !token) {
      navigate("/");
      console.log(loginstate);
    }
  }, [loginstate, token, navigate]);

  return loginstate === "Y" && token ? element : null;
};
