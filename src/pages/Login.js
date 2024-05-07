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
    navigate("/home");
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

  const handleWriteCancel = item => {
    setPayload({ ...payload, [item]: "" });
  };

  return (
    <LoginWrap>
      <div className="logo">
        <div>
          <h2>Green Coffee</h2>
        </div>
        <div>
          <h3>
            안녕하세요.
            <br />
            그린커피입니다.
          </h3>
          <span>회원 서비스 이용을 위해 로그인 해주세요.</span>
        </div>
      </div>
      <LoginInput
        payload={payload}
        handleChange={handleChange}
        handleLogin={handleLogin}
        handleWriteCancel={handleWriteCancel}
      />
    </LoginWrap>
  );
};

export default Login;
