import React from "react";
import { SignInputWrap } from "../../styles/SignUpStyle";

const SignUpInput = ({
  payload,
  handleChange,
  handlePassCheck,
  warningMsg,
  passConfirm,
  setPassConfirm,
  handleSignUp,
  buttonColor,
  handlePassCrossCheck,
  formatPhoneNumber,
}) => {
  return (
    <SignInputWrap>
      <div>
        <label htmlFor="sign-id">아이디 (이메일)</label>
        <input
          type="email"
          id="sign-id"
          className={payload.email ? "isActive-input" : ""}
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
          className={payload.password ? "isActive-input" : ""}
          placeholder="영문과 숫자와 기호를 모두 포함하는 6자 이상"
          autoComplete="current-password"
          value={payload.password}
          onChange={e => handleChange(e, "password")}
          onBlur={handlePassCheck}
        />
        {payload.password && warningMsg.passCheck && (
          <p className="warning-message">{warningMsg.passCheck}</p>
        )}
      </div>
      <div>
        <label htmlFor="sign-passok">비밀번호 확인</label>
        <input
          type="password"
          id="sign-passok"
          className={passConfirm ? "isActive-input" : ""}
          placeholder="영문과 숫자와 기호를 모두 포함하는 6자 이상"
          autoComplete="current-password"
          value={passConfirm}
          onChange={e => setPassConfirm(e.target.value)}
          onBlur={handlePassCrossCheck}
        />
        {passConfirm && (
          <p className="warning-message">{warningMsg.passConfirmCheck}</p>
        )}
      </div>
      <div>
        <label htmlFor="sign-nick">닉네임</label>
        <input
          type="text"
          id="sign-nick"
          placeholder="한글 2자 이상"
          className={payload.nickname ? "isActive-input" : ""}
          value={payload.nickname}
          onChange={e => handleChange(e, "nickname")}
          onBlur={handlePassCrossCheck}
        />
        {payload.nickname && (
          <p className="warning-message">{warningMsg.nickCheck}</p>
        )}
      </div>
      <ul>
        <li>
          <label htmlFor="sign-date">생년월일</label>
          <input
            type="text"
            id="sign-date"
            className={payload.birthdate ? "isActive-input" : ""}
            placeholder="910101"
            value={payload.birthdate}
            onChange={e => handleChange(e, "birthdate")}
            onBlur={handlePassCrossCheck}
            maxLength={6}
          />
          {payload.birthdate.length < 6 ? (
            <p className="warning-message">{warningMsg.birthCheck}</p>
          ) : (
            ""
          )}
        </li>
        <li>
          <label htmlFor="sign-phone">휴대전화</label>
          <input
            type="text"
            id="sign-phone"
            className={payload.phone ? "isActive-input" : ""}
            placeholder="010-1234-1234"
            value={formatPhoneNumber}
            onChange={e => handleChange(e, "phone")}
            onBlur={handlePassCrossCheck}
            maxLength={11}
          />
          {payload.phone.length < 11 ? (
            <p className="warning-message">{warningMsg.phoneCheck}</p>
          ) : (
            ""
          )}
        </li>
      </ul>
      <div className="buttons">
        <button
          className={buttonColor ? "isActive-button" : ""}
          onClick={handleSignUp}
        >
          확인
        </button>
      </div>
    </SignInputWrap>
  );
};

export default SignUpInput;
