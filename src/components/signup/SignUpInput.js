import React from "react";
import { SignInputWrap } from "../../styles/SignUpStyle";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { DisabledBtn, MainBtn, Xmark } from "../../styles/ui/buttons";

const SignUpInput = ({
  payload,
  handleChange,
  handlePassCheck,
  warningMsg,
  passConfirm,
  setPassConfirm,
  handleSignUp,
  handleEmailCheck,
  handleNickCheck,
  handleBirthCheck,
  handlePassCrossCheck,
  handlePhoneCheck,
  formatPhoneNumber,
  handleWriteCancel,
}) => {
  return (
    <SignInputWrap>
      <div>
        <label htmlFor="sign-id">아이디 (이메일)</label>
        <div style={{ position: "relative" }}>
          <input
            type="email"
            id="sign-id"
            className={payload.email ? "isActive-input" : ""}
            placeholder="greencoffee123@gamil.com"
            autoComplete="username"
            value={payload.email}
            onChange={e => handleChange(e, "email")}
            onBlur={handleEmailCheck}
          />
          {payload.email && (
            <Xmark
              style={{ top: "30%" }}
              icon={faCircleXmark}
              onClick={() => handleWriteCancel("email")}
            />
          )}
        </div>
        {payload.email && (
          <p className="warning-message">{warningMsg.emailCheck}</p>
        )}
      </div>
      <div>
        <label htmlFor="sign-pass">비밀번호</label>
        <div style={{ position: "relative" }}>
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
          {payload.password && (
            <Xmark
              style={{ top: "30%" }}
              icon={faCircleXmark}
              onClick={() => handleWriteCancel("password")}
            />
          )}
        </div>
        {payload.password && (
          <p className="warning-message">{warningMsg.passCheck}</p>
        )}
      </div>
      <div>
        <label htmlFor="sign-passok">비밀번호 확인</label>
        <div style={{ position: "relative" }}>
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
            <Xmark
              style={{ top: "30%" }}
              icon={faCircleXmark}
              onClick={() => setPassConfirm("")}
            />
          )}
        </div>
        {passConfirm && (
          <p className="warning-message">{warningMsg.passConfirmCheck}</p>
        )}
      </div>
      <div>
        <label htmlFor="sign-nick">닉네임</label>
        <div style={{ position: "relative" }}>
          <input
            type="text"
            id="sign-nick"
            placeholder="한글 2자 이상"
            className={payload.nickname ? "isActive-input" : ""}
            value={payload.nickname}
            onChange={e => handleChange(e, "nickname")}
            onBlur={handleNickCheck}
          />
          {payload.nickname && (
            <Xmark
              style={{ top: "30%" }}
              icon={faCircleXmark}
              onClick={() => handleWriteCancel("nickname")}
            />
          )}
        </div>
        {payload.nickname && (
          <p className="warning-message">{warningMsg.nickCheck}</p>
        )}
      </div>
      <ul>
        <li>
          <label htmlFor="sign-date">생년월일</label>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              id="sign-date"
              className={payload.birthdate ? "isActive-input" : ""}
              placeholder="910101"
              value={payload.birthdate}
              onChange={e => handleChange(e, "birthdate")}
              onBlur={handleBirthCheck}
              maxLength={6}
            />
            {payload.birthdate && (
              <Xmark
                style={{ top: "30%" }}
                icon={faCircleXmark}
                onClick={() => handleWriteCancel("birthdate")}
              />
            )}
          </div>
          {payload.birthdate && (
            <p className="warning-message">{warningMsg.birthCheck}</p>
          )}
        </li>

        <li>
          <label htmlFor="sign-phone">휴대전화</label>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              id="sign-phone"
              className={payload.phone ? "isActive-input" : ""}
              placeholder="010-1234-1234"
              value={formatPhoneNumber}
              onChange={e => handleChange(e, "phone")}
              onBlur={handlePhoneCheck}
              maxLength={11}
            />
            {payload.phone && (
              <Xmark
                style={{ top: "30%" }}
                icon={faCircleXmark}
                onClick={() => handleWriteCancel("phone")}
              />
            )}
          </div>
          {payload.phone && (
            <p className="warning-message">{warningMsg.phoneCheck}</p>
          )}
        </li>
      </ul>
      <div className="buttons">
        {Object.values(warningMsg).every(value => value === "") ? (
          <MainBtn onClick={handleSignUp}>확인</MainBtn>
        ) : (
          <DisabledBtn
            onClick={e => {
              e.preventDefault();
            }}
          >
            확인
          </DisabledBtn>
        )}
      </div>
    </SignInputWrap>
  );
};

export default SignUpInput;
