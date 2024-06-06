import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { useRecoilValue } from "recoil";

export const PrivateRoutes = ({ element }) => {
  const navigate = useNavigate();
  const token = 123
  // const { loginstate, token } = useRecoilValue(AuthStateAtom);

  // useEffect(() => {
  //   if (!token) {
  //     navigate("/");
  //   }
  // }, [token, navigate]);

  return token ? element : null;
  // return token ? element : null;
  // return loginstate === "Y" && token ? element : null;
};
