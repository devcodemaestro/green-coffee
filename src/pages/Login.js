import React, { useState } from "react";
import { LoginWrap } from "../styles/LoginStyle";
import LoginInput from "../components/login/LoginInput";
import { postLogin } from "../api/client";
import { useNavigate } from "react-router";

const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload({ ...payload, [item]: value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    navigate("/home")
    // try {
    //   const { role, token, ...result } = await postLogin({ payload });
    //   if (role === "USER" && token) {
    //     navigate("/home");
    //   }
    //   console.log(result);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <LoginWrap>
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="" />
      </div>
      <LoginInput
        payload={payload}
        handleChange={handleChange}
        handleLogin={handleLogin}
      />
    </LoginWrap>
  );
};

export default Login;
