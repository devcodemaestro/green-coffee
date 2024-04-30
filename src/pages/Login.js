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
    try {
      const { status, result } = await postLogin({ payload });
      if (result && status === 200) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginWrap>
      <div className="inner">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="" />
        </div>
        <LoginInput
          payload={payload}
          handleChange={handleChange}
          handleLogin={handleLogin}
        />
      </div>
    </LoginWrap>
  );
};

export default Login;
