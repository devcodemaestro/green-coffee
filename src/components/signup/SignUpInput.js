import React from "react";
import { SignInputWrap } from "../../styles/SignUpStyle";

const SignUpInput = ({
  payload,
  handleChange,
  handlePassCheck,
  passCheck,
  setPassConfirm,
  handleSignUp,
}) => {
  return (
    <SignInputWrap>
      <div>
        <label htmlFor="sign-id">아이디 (이메일)</label>
        <input
          type="email"
          id="sign-id"
          placeholder="greencoffee123@gamil.com"
          autoComplete="username"
          value={payload.email}
          onChange={e => handleChange(e, "email")}
        />
      </div>
      <div>
        <label htmlFor="sign-pass">비밀번호</label>
        <input
          type="password"
          id="sign-pass"
          placeholder="영문과 숫자와 기호를 모두 포함하는 6자 이상"
          autoComplete="current-password"
          value={payload.password}
          onChange={e => handleChange(e, "password")}
          onBlur={handlePassCheck}
        />
        {passCheck && <p>{passCheck}</p>}
      </div>
      <div>
        <label htmlFor="sign-passok">비밀번호 확인</label>
        <input
          type="password"
          id="sign-passok"
          placeholder="영문과 숫자와 기호를 모두 포함하는 6자 이상"
          autoComplete="current-password"
          onChange={e => setPassConfirm(e.target.value)}
          onBlur={handlePassCheck}
        />
        {passCheck && <p>{passCheck}</p>}
      </div>
      <div>
        <label htmlFor="sign-nick">닉네임</label>
        <input
          type="text"
          id="sign-nick"
          placeholder="닉네임을 입력해주세요."
          value={payload.nickname}
          onChange={e => handleChange(e, "nickname")}
        />
      </div>
      <ul>
        <li>
          <label htmlFor="sign-phone">휴대전화</label>
          <input
            type="number"
            id="sign-phone"
            placeholder="010-1234-1234"
            value={payload.phone}
            onChange={e => handleChange(e, "phone")}
          />
        </li>
        <li>
          <label htmlFor="sign-date">생년월일</label>
          <input
            type="number"
            id="sign-date"
            placeholder="910101"
            value={payload.birthdate}
            onChange={e => handleChange(e, "birthdate")}
          />
        </li>
      </ul>
      <div className="buttons">
        <button onClick={handleSignUp}>확인</button>
      </div>
    </SignInputWrap>
  );
};

export default SignUpInput;
