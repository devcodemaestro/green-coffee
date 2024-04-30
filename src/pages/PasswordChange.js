import React from "react";
import { PassChangeWrap } from "../styles/PassChangeStyle";
import { useNavigate } from "react-router";

const PasswordChange = () => {
  const navigate = useNavigate();

  const handleOk = () => {
    navigate("/mypage");
  };
  return (
    <PassChangeWrap>
      <div className="password">
        <label htmlFor="change-pass">비밀번호</label>
        <input
          type="password"
          id="change-pass"
          placeholder="기존 비밀번호를 입력해주세요."
          autoComplete="current-password"
        />
      </div>
      <div>
        <label htmlFor="change-newpass">새 비밀번호</label>
        <input
          type="password"
          id="change-newpass"
          placeholder="영문과 숫자를 모두 포함하는 8~20자"
          autoComplete="current-password"
        />
      </div>
      <div>
        <label htmlFor="change-newpassok">새 비밀번호 확인</label>
        <input
          type="password"
          id="change-newpassok"
          placeholder="영문과 숫자를 모두 포함하는 8~20자"
          autoComplete="current-password"
        />
      </div>
      <div className="buttons">
        <button onClick={handleOk}>확인</button>
      </div>
    </PassChangeWrap>
  );
};

export default PasswordChange;
