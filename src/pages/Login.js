import React, { useState } from "react";
import { LoginWrap } from "../styles/LoginStyle";
import LoginInput from "../components/login/LoginInput";
import { postLogin } from "../api/client";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { UserStateAtom } from "../recoil/atoms/UserState";

const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const setAuthData = useSetRecoilState(AuthStateAtom);
  const setUserData = useSetRecoilState(UserStateAtom);

  const navigate = useNavigate();

  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload({ ...payload, [item]: value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const { role, token, result } = await postLogin({ payload });
      if (role === "USER" && token) {
        console.log(result);
        setAuthData({
          token: token,
          loginstate: result.loginstate,
        });
        setUserData({
          user_id: result.user_id,
          email: result.email,
          nickname: result.nickname,
          phone: result.phone,
          birthdate: result.birthdate,
          coupon: result.coupon,
          stamp: result.stamp,
        });
        navigate("/home");
      }
    } catch (err) {
      console.log(err);
    }
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
