import React, { useState } from "react";
import { LoginWrap } from "../styles/LoginStyle";
import LoginInput from "../components/login/LoginInput";
import { postLogin } from "../api/client";
import { useNavigate } from "react-router";
import { useSetRecoilState } from "recoil";
import { AuthStateAtom } from "../recoil/atoms/AuthState";
import { UserStateAtom } from "../recoil/atoms/UserState";
import ConfirmModal from "../components/modals/ConfirmModal";
import InstallApp from "../components/InstallApp";

const Login = () => {
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const setAuthData = useSetRecoilState(AuthStateAtom);
  const setUserData = useSetRecoilState(UserStateAtom);
  const [warningMsg, setWarningMsg] = useState({
    emailCheck: "",
    passCheck: "",
  });
  const navigate = useNavigate();

  const handleChange = (e, item) => {
    const { value } = e.target;
    setPayload({ ...payload, [item]: value });
  };

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const { role, token, result } = await postLogin({ payload, setErrMsg });
      if (role === "USER" && token) {
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
      setModalOpen(true);
    }
  };

  const handleWriteCancel = item => {
    setPayload({ ...payload, [item]: "" });
    switch (item) {
      case "email":
        setWarningMsg(warningMsg => ({
          ...warningMsg,
          emailCheck: "이메일 형식을 확인해주세요.",
        }));
        break;
      case "password":
        setWarningMsg(warningMsg => ({
          ...warningMsg,
          passCheck: "비밀번호를 양식에 맞춰 작성해주세요.",
        }));
        break;
      default:
        break;
    }
  };

  const handleEmailCheck = () => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(payload.email);
    setWarningMsg(warningMsg => ({
      ...warningMsg,
      emailCheck: isValid ? "" : "이메일 형식을 확인해주세요.",
    }));
  };

  const handleConfirm = () => {
    setModalOpen(false);
  };
  return (
    <LoginWrap>
      <InstallApp />
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
        handleEmailCheck={handleEmailCheck}
        warningMsg={warningMsg}
      />
      {modalOpen && (
        <ConfirmModal open={modalOpen} onConfirm={handleConfirm}>
          <span>{errMsg}</span>
        </ConfirmModal>
      )}
    </LoginWrap>
  );
};

export default Login;
