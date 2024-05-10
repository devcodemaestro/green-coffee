import React from "react";
import { LoginInputWrap } from "../../styles/LoginStyle";
import { Link } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { DisabledBtn, MainBtn, Xmark } from "../../styles/ui/buttons";

const LoginInput = ({
  payload,
  handleChange,
  handleLogin,
  handleWriteCancel,
  warningMsg,
  handleEmailCheck,
}) => {
  const isFormComplete = payload.email && payload.password;
  return (
    <LoginInputWrap>
      <form>
        <div>
          <label htmlFor="login-id">아이디 (이메일)</label>
          <div>
            <input
              type="email"
              id="login-id"
              className={payload.email ? "isActiveLine" : ""}
              placeholder="아이디"
              autoComplete="username"
              value={payload.email}
              onChange={e => handleChange(e, "email")}
              onBlur={handleEmailCheck}
            />
            {payload.email && (
              <Xmark
                icon={faCircleXmark}
                style={{ position: "absolute", right: "2%", top: "10%" }}
                onClick={() => handleWriteCancel("email")}
              />
            )}
            {payload.email && (
              <p className="warning-message">{warningMsg.emailCheck}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="login-pass">비밀번호</label>
          <div>
            <input
              type="password"
              id="login-pass"
              className={payload.password ? "isActiveLine" : ""}
              placeholder="비밀번호"
              autoComplete="current-password"
              value={payload.password}
              onChange={e => handleChange(e, "password")}
            />
            {payload.password && (
              <Xmark
                icon={faCircleXmark}
                style={{ position: "absolute", right: "2%", top: "10%" }}
                onClick={() => handleWriteCancel("password")}
              />
            )}
          </div>
        </div>
        <ul>
          <li>
            <div>
              <input
                type="checkbox"
                id="login-check"
                name="auto-check"
                className="auto-login"
              />
              <label htmlFor="login-check">자동 로그인</label>
            </div>
            <div>
              <Link to="/findaccount">아이디 / 비밀번호 찾기</Link>
            </div>
          </li>
          <li>
            {isFormComplete ? (
              <MainBtn onClick={handleLogin}>로그인</MainBtn>
            ) : (
              <DisabledBtn onClick={handleLogin}>로그인</DisabledBtn>
            )}
          </li>
        </ul>
      </form>
      <div className="link">
        <Link to="/terms">아직 회원이 아니신가요?</Link>
      </div>
    </LoginInputWrap>
  );
};

export default LoginInput;
